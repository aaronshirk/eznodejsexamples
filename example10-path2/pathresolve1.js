// Base Case, 'to' argument (last argument) is an absolute path
var path = require('path');

var mypath1 = path.resolve('/one', '/two', '/three', '/finalpath');
console.log('[1]: ' + mypath1);