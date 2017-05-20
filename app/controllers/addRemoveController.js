var addRemove = require('../models/addRemove')
var bodyParser = require('body-parser')
var session = require('express-session');

module.exports = {
  addRemove: function(req, res){
    addRemove.addRemove(friend, email, function(err, result){
      if(err){
        console.log(err);
      }
    })
  }
}
