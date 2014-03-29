var fs = require('fs');

var getFileStats = function() {
	var filename = __dirname + '/sample.dd';
	fs.stat(filename, function(err, stats) {
		if (err) throw err;
		console.log('Stats for file [' + filename + ']');
		console.log(stats);

		var filesize = stats.size;
		if (typeof filesize === 'number') {
			console.log('\n\n**Filesize is a number with value: ' + filesize);
		}
	});

	console.log('fs.stat async running ...');
};

getFileStats();