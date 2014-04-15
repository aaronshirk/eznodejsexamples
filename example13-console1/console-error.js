// console.error and console.err both print to stderr

var errors = [];
for (var i = 0; i < 10; i++) {
	errors.push('ERROR[' + (i + 1) +  ']: Something bad has happened')
}

function printIt(errStack) {
	if (!errStack) {
		throw new Error('Argument must be an array of errors');
	}
	errStack.forEach(logNormal);
	errStack.forEach(logWarnings);
	errStack.forEach(logErrors);

}


function logErrors(element, index) {
	console.error('err: ' + element);
}

function logWarnings(element, index) {
	console.warn('warn: ' + element);
}

function logNormal(element, index) {
	console.log('log: ' + element);
}

printIt(errors);


// run using this command
// node console-error.js  2> stderr.txt 1> stdout.txt; wc -l stderr; wc -l stdout ; cat stderr
// 1. call node and redirect stderr to a file called stderr.txt and stdout to a file called stdout.txt
// 2. count lines in stdout.txt  (should only be 10 since console.log is the only one that prints to stdout)
// 3. count lines in stderr.txt (should be 20 since console.log and console.warn both print to stderr)
// 4. cat contents of stderr and view twenty lines