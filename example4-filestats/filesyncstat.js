var fs = require('fs');

var getFileSyncStats = function() {
	var filename = __dirname + '/sample.dd';
	var stats = fs.statSync(filename);
	
	console.log('Stats for file [' + filename + ']');
	console.log(stats);

	console.log('\nfs.stat sync running ...');
};

getFileSyncStats();