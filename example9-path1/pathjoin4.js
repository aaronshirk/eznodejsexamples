var path = require('path');
var fs = require('fs');

var p = path.join('/' , 'projects/', 'someotherdirectory', '..', '.', 'eznodejsexamples', 'example9-path1');
console.log(p);

fs.exists(p, function(exists) {
	if (exists) {
		console.log('path exists');
		fs.stat(p, function(err, stats) {
			if (err) throw err;
			if (stats.isDirectory()) {
				console.log('path is a directory');
			} else if (stats.isFile()) {
				console.log('path is a file');
			}
		})
	} else {
		console.log('path does not exist');
	}
});
