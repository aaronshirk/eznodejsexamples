var fs = require('fs');

var openFile = function() {
	var filename = __dirname + '/samplefile1.txt';
	fs.open(filename, 'r', function(err, fd) {
		if (err) {
			console.log(err);
			throw err;
		}

		console.log('Value of fd: ' + fd);
	});

	console.log('Calling asyn open method ...');
}

openFile();