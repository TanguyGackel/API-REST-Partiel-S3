const bcrypt = require('bcrypt');

module.exports = (passport, user) => {
    const User = user;
    const LocalStrategy = require('passport-local').Strategy;
    const GoogleStrategy = require('passport-google-oauth2').Strategy;
    const FacebookStrategy = require('passport-facebook').Strategy;
    const SteamStrategy = require('passport-steam').Strategy;
    passport.use('local-signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
        (req, email, password, done) => {
            let generateHash = (password) => {
                return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
            };
            User.findOne({where: {emailID: email}})
                .then((user) => {
                    if(user){
                        return done(null, false, {message: 'Cette email est déjà pris'});
                    }
                    let userPassword = generateHash(password);
                    let data = {
                        emailID: email,
                        password: userPassword,
                        firstName: req.body.firstName,
                        lastName: req.body.lastName
                    };
                    User.create(data).then((newUser, created) => {
                        if(!newUser){
                            return done(null, false);
                        }
                        if(newUser){
                            return done(null, newUser);
                        }
                    });
                });
        })
    )
    passport.use('local-signin', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
        (req, email, password, done) => {
            let User = user;
            let isValidPassword = (userpass, password) => {
                return bcrypt.compareSync(password, userpass)
            };
            User.findOne({where: {emailID: email}}).then((user) => {
                if(!user){
                    return done(null, false, {message: "L'email n'existe pas"});
                }
                if(!isValidPassword(user.password, password)){
                    return done(null, false, {message: "Mot de passe incorrect"});
                }
                let userinfo = user.get();
                return done(null, userinfo);
            }).catch((err) =>{
                console.log('Error', err);
                return done(null, false, {message: "Une erreur s'est produite lors de votre connexion"});
            });
        })
    );
    const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
    const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
    passport.use(new GoogleStrategy({
            clientID:     GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:3000/google/callback",
            passReqToCallback   : true
        },
        function(request, accessToken, refreshToken, profile, done) {
            return done(null, profile);
        }
    ));

    const FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID;
    const FACEBOOK_APP_SECRET = process.env.FACEBOOK_APP_SECRET;
    passport.use(new FacebookStrategy({
            clientID: FACEBOOK_APP_ID,
            clientSecret: FACEBOOK_APP_SECRET,
            callbackURL: "http://localhost:3000/facebook/callback",
        },
        function(accessToken, refreshToken, profile, done){
            return done(null, profile);
        }
    ));
    passport.use(new SteamStrategy({
            returnURL: 'http://localhost:3000/steam/callback',
            realm: 'http://localhost:3000/',
            apiKey: process.env.STEAM_API_KEY
        },
        function(identifier, profile, done) {
            return done(null, profile);
        }
    ));

    passport.serializeUser(function(user, done) {
        done(null, user);
    });
    passport.deserializeUser(function(user, done) {
        done(null, user);
    });

};