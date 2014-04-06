// If no absolute path is found, then the last argument is appended to the current working dir
// Equivalent to concatenating 'pwd' + last argument
var path = require('path');

var mypath1 = path.resolve('one', 'two', 'three', 'finalpath');
console.log('[1]: ' + mypath1);