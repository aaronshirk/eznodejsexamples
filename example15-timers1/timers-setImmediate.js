var EventEmitter = require('events').EventEmitter,
	util = require('util');


function longRunningFunction1() {
	console.log('Enter longRunningfunction1');
	for (var k = 0; k < 1000000000; k++) {
		;
	}
	console.log('Exit longRunningfunction1');
}


function longRunningFunction2() {
	console.log('Enter longrunningFunction2');
	for (var k = 0; k < 1000000000; k++) {
		;
	}
	console.log('Exit longRunningFunction2');
}

function combinedLongRunningFunction() {
	console.log('Enter combinedLongRunningFunction');
	longRunningFunction1();
	setImmediate(longRunningFunction2);
	console.log('Exit combinedLongRunningFunction');
}

setImmediate(combinedLongRunningFunction);



function MessageEmitter() {
	this.name = 'MyEmitter';
	this.dataCounter = 0;
}


util.inherits(MessageEmitter, EventEmitter);

MessageEmitter.prototype.emitSomeData = function() {
	this.emit('message-data-event', '[' + this.dataCounter + ']: Emitting some data');
	this.dataCounter++;
}

var myMessageEmitter = new MessageEmitter();

myMessageEmitter.on('message-data-event', function (data) {
	for (var j = 0; j < 1000000000; j++) {
		;
	}
	console.log(data);
});


setImmediate(function() {
	console.log('Enter emit data callback function');
	for (var i = 0; i < 5; i++) {
		myMessageEmitter.emitSomeData();
	}
});




