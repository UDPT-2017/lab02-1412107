
var Router = require('express').Router;

var controllers = require('../app/controllers')

module.exports = function(app){

	var indexRouter = Router().get('/', controllers.index.index)
	app.use('/', indexRouter)

	var aboutRouter = Router().get('/', controllers.about.about)
	app.use('/about', aboutRouter)

	app.get('/messages', controllers.messages.messages)

	app.get('/users', controllers.users.index)

	app.get('/signup',  controllers.signup.showFormSignup)
	app.post('/signup',  controllers.signup.checkSignup)

	app.get('/signin',  controllers.signin.showSignin)
	app.post('/signin',  controllers.signin.checkSignin)
	app.get('/signout',  controllers.signout.signout)
	app.get('/getdata', controllers.addRemove.addRemove)
}
