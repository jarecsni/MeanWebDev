// Invoke 'strict' JavaScript mode
'use strict';

// Load the 'hello' module
var hello = require('./hello');

// Call the 'hello' module as a function
hello();

// do some file stuff
var fs = require('fs');

var contents = fs.readFile('./test.txt', 'utf8', function(err, data) {
   if (err) {
       return console.log(err);
   } else {
       console.log(data);
   }
});
