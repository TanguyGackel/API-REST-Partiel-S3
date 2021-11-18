const authCtrl = require('../controllers/auth');

module.exports = (app, passport) => {
    app.get('/signup', authCtrl.signup);
    app.get('/signin', authCtrl.signin);
    app.post('/signup', passport.authenticate('local-signup', {successRedirect: '/home', failureRedirect: '/signup'}));
    app.get('/home', isLoggedIn, authCtrl.home);
    app.get('/logout',authCtrl.logout);
    app.post('/signin', passport.authenticate('local-signin', { successRedirect: '/home',
        failureRedirect: '/signin'}
    ));
    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/signin');
    }
}

