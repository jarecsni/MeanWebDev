// Invoke 'strict' JavaScript mode
'use strict';

// Set the 'NODE_ENV' variable
console.log("Original Development environment: " + process.env.NODE_ENV)
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
console.log("Development environment: " + process.env.NODE_ENV)

// Load the 'express' module
var express = require('./config/express');

// Create a new Express application instance
// This is quite misleading. This does not create any new instance, but simply calls the function that is returned
// by the require. As the ./config/express simply exports a function. By calling it we receive the app (which is an
// express instance)
//
// A more succinct way - and less confusing - way to do this would be:
//
// var app = require('./config/express')()
var app = express();

// Use the Express application instance to listen to the '3000' port
app.listen(3000);

// Log the server status to the console
console.log('Server running at http://localhost:3000/');

// Use the module.exports property to expose our Express application instance for external usage
module.exports = app;