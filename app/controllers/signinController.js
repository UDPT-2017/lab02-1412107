var signin = require('../models/signin')
var bodyParser = require('body-parser')
var session = require('express-session');
// var sess = require('./index')

var signinController = {
  showSignin: function(req, res){
    res.render('shared/signin',
       {
          title: 'Sign in',
          message: 'Signin flicke',
          page: 'Signin'
       });
    },
  checkSignin: function(req, res){
    var email = req.body.email;
    var password = req.body.password;
    // console.log(req.body)
    signin.checkEmail(email, function(err, result){
      if(err){
        res.render('shared/signup',
           {
              title: 'Sign up',
              message: 'Signup flicke!',
              page: 'Signup',
              messagecheckSignin: 'Error database'
           });
           res.end();
           throw(err);
      }
      else {
        // console.log(result.rows.length)
        if(result.rows.length > 0){
          signin.checkEmailPassword(email, password, function(err, result){
            if(err){
              res.render('shared/signup',
                 {
                    title: 'Sign up',
                    message: 'Signup flicke!',
                    page: 'Signup',
                    messagecheckSignin: 'Error database'
                 });
              res.end();
              throw(err);
            }
            else {
              // console.log(result.rows.length)
              if(result.rows.length > 0){
                let Welcome = 'Welcome ' + email + ' to mychat';
                // sess = req.session;
                req.session.email=req.body.email;
                console.log(req.session.email);
                res.render('shared/signin',
                   {
                      title: 'Sign in',
                      message: 'Signin flicke!',
                      page: 'Signin',
                      messagecheckSignin: 'Sign in successfully',
                      messageWelcome: Welcome
                   });
                // res.end('done');
                // res.redirect('/messages');
              }
              else {
                res.render('shared/signin',
                   {
                      title: 'Sign in',
                      message: 'Signin flicke!',
                      page: 'Signup',
                      messagecheckSignin: 'password wrong'
                   });
              }
            }
          })
        }
        else {
          res.render('shared/signin',
             {
                title: 'Sign in',
                message: 'Signin flicke!',
                page: 'Signin',
                messagecheckSignin: 'email does not exist'
             });
        }
      }
    })
  }
}

module.exports = signinController;
