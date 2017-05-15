var express = require('express');
var bodyParser = require('body-parser')
var session = require('express-session');
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = function(app){
	app.use(express.static('public'));
	app.use('/components', express.static('bower_components'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }))
	app.use(session({secret: 'ssshhhhh', cookie: { maxAge: 60000, path: '/' }, resave: true, saveUninitialized: true }));
}
