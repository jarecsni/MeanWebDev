// Invoke 'strict' JavaScript mode
'use strict';

// this is just an excercise to model how a module like connect is written:
//
// Like var c = connect();
// c.listen(3000);
//
module.exports = function() {
	console.log("hello2 invoked");
	return {
		x: function() {
			console.log("f invoked");
		}
	};
}