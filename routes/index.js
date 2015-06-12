// Dependencies
var passport = require('passport'),
    userController = require('../controller/userController').UserController,
    CONSTANT = require('../utilities/Constant').CONSTANTS,
    bCrypt = require('bcrypt-nodejs'),
    locals = {};


module.exports.login = function (req, res) {
    res.render('index', {message: req.flash('loginMessage'), pagetitle: 'Login', passchange: req.flash('passchange')});
};

module.exports.logout = function (req, res) {
    req.logout();
    res.redirect('/');
};

module.exports.loginMethod = passport.authenticate('login', {
    successRedirect: '/dashboard',
    failureRedirect: '/',
    failureFlash: 'Invalid username or password.'
});
/*=======================Dash Board Starts==================================*/
module.exports.userDashboard = function(req, res){
    locals.userDetail = req.user;
    res.render('userDashboard', locals);
};
/*=======================Dash Board Ends==================================*/
module.exports.studentSignup = function(req, res){
    locals.months = CONSTANT.MONTHS;
    res.render('index', locals);
};

module.exports.user = function (req, res) {
    userController.getAllUsers().done(function (users) {
        res.send(users);
    });
};
module.exports.userpresent = function (req, res) {
    // console.log(req.body.email);
    userController.getUserByEmailId(req.body.email).done(function (user) {
        if(user){
            res.send(false);
        }else{
            res.send(true);
        }

    });
};
/*=======================Add New User Start ==================================*/
module.exports.addNewUser = function(req, res){
    var createUser = {
        email: req.body.email,
        mobile: req.body.mobile,
        password: bCrypt.hashSync(req.body.password, bCrypt.genSaltSync(8), null),
        created_at: new Date(),
        status: 'active'
    };

    userController.addUser(createUser).done(function (user) {
        if(user){
            console.log(user);
            res.redirect('/');
        }
    });
};
/*=======================Add New User Ends==================================*/
