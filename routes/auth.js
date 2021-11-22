const authCtrl = require('../controllers/auth.js');

module.exports = (app,passport) => {
    app.get('/signup', authCtrl.signup);
    app.get('/signin', authCtrl.signin);
    app.post('/signup', passport.authenticate('local-signup', { successRedirect: '/home', failureRedirect: '/signup'}));
    app.get('/google', passport.authenticate('google', {scope: ['email', 'profile']}))
    app.get('/google/callback', passport.authenticate('google', {successRedirect: '/home', failureRedirect: '/signin'}));
    app.get('/facebook', passport.authenticate('facebook'));
    app.get('/facebook/callback', passport.authenticate('facebook', {successRedirect: '/home', failureRedirect: '/signin'}));
    app.get('/steam', passport.authenticate('steam'));
    app.get('/steam/callback', passport.authenticate('steam', {successRedirect: '/home', failureRedirect: '/signin'}));
    app.get('/home', authCtrl.isLoggedIn, authCtrl.home);
    app.get('/logout',authCtrl.logout);
    app.post('/signin', passport.authenticate('local-signin', { successRedirect: '/home', failureRedirect: '/signin'}));
}
