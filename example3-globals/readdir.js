var fs = require('fs');

// search for file that end with *.txt in the current directory
fs.readdir(__dirname, function(err, files) {
	if (err) throw err;
	if (files) {
		for (var i = 0; i < files.length; i++) {
			var filename = files[i];
			if (typeof filename === 'string' && filename.match(/\.txt$/)) {
				console.log(filename);
			}
		}
	}
});