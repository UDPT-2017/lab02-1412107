var users = require('../models/users')
var bodyParser = require('body-parser')

var usersController = {
   index: function (req, res) {
     //call models
    //  var result;
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
         console.log(result)
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
