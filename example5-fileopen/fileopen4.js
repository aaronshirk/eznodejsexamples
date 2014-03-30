var fs = require('fs');

var openFile = function() {
	var filename = __dirname + '/fileforwriting.txt';
	fs.open(filename, 'w', 0333, function(err, fd) {
		if (err) {
			console.log(err);
			throw err;
		}

		console.log('Value of fd: ' + fd);
	});

	console.log('Calling asyn open method ...');
}

openFile();