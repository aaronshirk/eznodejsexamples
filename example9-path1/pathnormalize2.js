// Handle '..' and '.'
var path = require('path');

var mypath = path.normalize('///projects/../../../../..');
console.log('[1]: ' + mypath);

mypath = path.normalize('projects/home/first/second/third/././fourth');
console.log('[2]: ' + mypath);