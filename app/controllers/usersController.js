var users = require('../models/users')
var bodyParser = require('body-parser')

var usersController = {
   index: function (req, res) {
     console.log(req.session.email)
     Welcome = 'Welcome ' + req.session.email + ' to mychat';
     if(req.session.email) {
       users.getNoneFriends(req.session.email, function(err, result){
         if(err){
           res.render('users/users',
              {
                 title: 'users',
                 Welcome: 'Error query',
                 page: 'users',
              });
           res.end();
           throw(err);
         }
         else {
           console.log(result.rows)
           users.getFriends(req.session.email, function(err, result1){
             if(err){
               res.render('users/users',
                  {
                     title: 'users',
                     Welcome: 'Error query',
                     page: 'users',
                  });
               res.end();
               throw(err);
             }
             else {
               console.log(result1.rows)
               res.render('users/users',
                  {
                     title: 'users',
                     page: 'users',
                     nonefriends: result.rows,
                     friends: result1.rows,
                     Welcome: Welcome
                  });
             }
           });
         }
       })
     }
     else {
       res.redirect('/');
     }

   }
};

module.exports = usersController;
