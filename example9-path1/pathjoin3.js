// Arguments must be strings
var path = require('path');

var version = process.version;
if (version.split('\.')[1] >= 10) {
	console.log('Node Version [' + version + '] --> path.join arguments must be string, else error is thrown');
} else {
	console.log('Node Version [' + version + '] --> path.join arguments that are not string may be ignored');
}

var mypath = path.join('///' , '..', '..', '..', 55, 'usr', 'local', 'bin')
console.log('[1]: ' + mypath);

