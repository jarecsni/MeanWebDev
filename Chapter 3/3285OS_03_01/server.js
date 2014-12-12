// Invoke 'strict' JavaScript mode
'use strict';

(function init() {
	// Load the 'express' module
	var express = require('express');

	// Create a new Express application instance
	var app = express();

	// another important lesson: the more specific mappings must come first.
	// if this /fofaki rouote was specified after / it would not work, as the / mapping would be
	// applied to everything
	//
	// so in other words, '/' means 'every path'
	//
	// Mount a new middleware function


	app.use('/fofa', function(req, res) {
		res.send("Fo Fa");
	});

	app.use('/fofaki', function(req, res) {
		res.send("Fo Fa Ki");
	});

	app.use('/', function(req, res) {
	// Use the 'response' object to send a respone
		res.send('Hello World');
	});

	app.param('sso', function() {
		console.log('SSO token');
	});

	// Use the Express application instance to listen to the '3000' port
	app.listen(3000);

	// Log the server status to the console
	console.log('Server running at http://localhost:3000/');

	// Use the module.exports property to expose our Express application instance for external usage
	//module.exports = app;
})();
//exports.init = init;
