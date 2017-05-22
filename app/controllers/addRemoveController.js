var addRemove = require('../models/addRemove')
var bodyParser = require('body-parser')
var session = require('express-session');

module.exports = {
  addRemove: function(req, res){
    email = req.sesion.email;
    if(command == "Add"){
      addRemove.add(email, receivedFriend, function(err, result){
        if(err){
          console.log(err);
        }
        else {

        }
      })
    }
    else {
      addRemove.remove(email, receivedFriend, function(err, result){
        if(err){
          console.log(err);
        }
        else {
  
        }
      })
    }
  }
}
