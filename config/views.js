var exphbs  = require('express-handlebars');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
// var helpers = require('app/helpers/ifCond');


//require helpers
// helpers = require('../app/helpers');
//moi file rieng cho 1 loai/ham helpers nhu controller

module.exports = function(app){
	app.engine('hbs', exphbs({
	   extname: ".hbs",
	   layoutsDir: path.resolve('app/views/layouts/'),
	   partialsDir: path.resolve('app/views/partials/'),
	  //  helpers: helpers
	}));
	app.set('view engine', 'hbs');
	app.set('views', path.resolve('app/views'));
}
