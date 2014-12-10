// Invoke 'strict' JavaScript mode
'use strict';

// Load the 'hello' module
var hello = require('./hello');

// Use the 'hello' module sayHello() method
hello.sayHello();

var janosGreeter = hello.makeGreeter("Janos");
var ferencGreeter = hello.makeGreeter("Ferenc");
console.log(janosGreeter());
console.log(ferencGreeter());
