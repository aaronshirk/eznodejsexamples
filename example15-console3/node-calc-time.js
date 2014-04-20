var startTime = new Date().getTime();

var total;
for (var i = 0; i < 400000000; i++) {
	total += i;
}

var stopTime = new Date().getTime();

console.log('Elapsed Time: ' + (stopTime - startTime) + ' milliseconds');