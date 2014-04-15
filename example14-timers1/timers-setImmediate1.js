var EventEmitter = require('events').EventEmitter,
	util = require('util');

//=================================================
//        Long Running Function 1


function longRunningTask1 () {
	console.log('Enter longRunningTask1');
	for (var k = 0; k < 1000000000; k++) {
		;
	}
	console.log('Exit longRunningTask1');
}


function longRunningTask2 () {
	console.log('Enter longRunningTask2');
	for (var k = 0; k < 1000000000; k++) {
		;
	}
	console.log('Exit longRunningTask2');
}

function longRunningFunction1() {
	longRunningTask1();
	longRunningTask2();
}

//=================================================
//        Long Running Function 2


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

function longRunningFunction2() {
	for (var i = 0; i < 5; i++) {
		myMessageEmitter.emitSomeData();
	}
}

//=================================================
//   Call setImmediate on long running function

setImmediate(longRunningFunction1);
setImmediate(longRunningFunction2);




