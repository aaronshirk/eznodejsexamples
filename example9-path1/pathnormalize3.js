// Preserve the trailing '/'
var path = require('path');


var mypath = path.normalize('/usr/loca/bin');
console.log('[1]: ' + mypath);

mypath = path.normalize('/usr/loca/bin/');
console.log('[2]: ' + mypath);