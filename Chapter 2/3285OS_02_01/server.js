// Invoke 'strict' JavaScript mode
'use strict';

// Load the 'hello' module
var hello = require('./hello');
var hello2 = require('./hello2');

// Use the 'hello' module sayHello() method
hello.sayHello();
var helloka = hello2();
console.log("hello2: " + helloka);

console.log("calling helloka.x...");
helloka.x();


var janosGreeter = hello.makeGreeter("Janos");
var ferencGreeter = hello.makeGreeter("Ferenc");
console.log(janosGreeter());
console.log(ferencGreeter());
