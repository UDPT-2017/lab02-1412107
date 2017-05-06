var express = require('express');
var bodyParser = require('body-parser')
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = function(app){
	app.use(express.static('public'));
	app.use('/components', express.static('bower_components'));
	app.use(bodyParser.urlencoded({ extended: true }))
}
