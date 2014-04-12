// Hidden fields 
var util = require('util');

var person = {
	firstname : 'Fred', 
	lastname : 'Hansbro',
	DOB : '04/03/98',
	height : { 
		feet : '5',
		inches : '3'
	},
	weight : {
		value : 68,
		units : 'LBS'
	},
	eyeColor : 'hazel'
};

Object.defineProperty(person, 'SSN', { value : '344-09-0987', enumerable : false});

var keys = Object.keys(person);
console.log('keys: ' + keys);

var options = {
	showHidden: true
};

var result = util.inspect(person, options);
console.log(result);