// Resolve Multiple Slashes
var path = require('path');

var mypath = path.normalize('///projects//home/biz///documents');
console.log('[1]: ' + mypath);
