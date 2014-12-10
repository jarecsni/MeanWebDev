// Invoke 'strict' JavaScript mode
'use strict';

// Define a module variable
var message = 'Hello';

function makeGreeter(name) {
	return function() {
		return "Hello " + name;
	}
}

// Print message to the console
module.exports.sayHello = function() {
	console.log(message);
};

module.exports.makeGreeter = makeGreeter;