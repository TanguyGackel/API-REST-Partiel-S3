exports.signup = (req, res) => {
    res.render('signup.hbs');
}
exports.signin = (req, res) => {
    res.render('signin.hbs');
}
exports.home = (req,res) => {
    res.render('home.hbs');
}
exports.logout = (req,res) => {
    req.session.destroy(() => {
        res.redirect('/signin');
    });
}
exports.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect('/signin');
}
