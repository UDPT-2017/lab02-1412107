var bodyParser = require('body-parser')
var session = require('express-session');
var signoutController = {
  signout: function(req, res){
    req.session.destroy(function(err) {
      if(err) {
        console.log(err);
      } else {
        res.redirect('/');
      }
    })
  }
}
module.exports = signoutController;
