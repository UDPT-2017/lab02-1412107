var users = require('../models/users')
var bodyParser = require('body-parser')

var usersController = {
   index: function (req, res) {
     console.log(req.session.email)
     Welcome = 'Welcome ' + req.session.email + ' to mychat';
     if(req.session.email) {
       users.getFriends(req.session.email, function(err, result){
         if(err){
           res.render('users/users',
              {
                 title: 'users',
                 message: 'This is users!',
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
                 page: 'users',
                 friends: result.rows,
                 Welcome: Welcome
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
