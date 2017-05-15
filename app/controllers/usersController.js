var users = require('../models/users')
var bodyParser = require('body-parser')

var usersController = {
   index: function (req, res) {
    //  sess = req.session;
     console.log(req.session.email)
     if(!req.session.email) {
       res.redirect('/');
     }
     users.getEmail(function(err, result){
       if(err){
         res.render('users/users',
            {
               title: 'users',
               message: 'This is users!',
               layout: 'users-layout',
               page: 'users',
            });
         res.end();
         throw(err);
       }
       else {
         console.log(result.rows)
         res.render('users/users',
            {
               title: 'users',
               message: 'This is users!',
               layout: 'users-layout',
               page: 'users',
               emails: result.rows
            });
       }
     })
   }
};

module.exports = usersController;
