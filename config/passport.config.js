const bcrypt = require('bcrypt');

module.exports = (passport, user) => {
    const User = user;
    const LocalStrategy = require('passport-local').Strategy;
    passport.serializeUser((user, done) => {
        done(null, user.id);
    })
    passport.deserializeUser((id, done) => {
        User.findByPk(id).then((user) => {
            if(user){
                done(null, user.get());
            }
            else{
                done(user.errors, null);
            }
        });
    });
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
};