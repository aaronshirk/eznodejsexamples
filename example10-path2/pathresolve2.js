// Resolve from right to left until an absolute path is found
var path = require('path');

var mypath1 = path.resolve('/one', '/two', '/three', '/finalpath');
console.log('[1]: ' + mypath1);

var mypath2 = path.resolve('/one', '/two', '/three', 'finalpath');
console.log('[2]: ' + mypath2);

var mypath3 = path.resolve('/one', '/two', 'three', 'finalpath');
console.log('[3]: ' + mypath3);

var mypath4 = path.resolve('/one', 'two', 'three', 'finalpath');
console.log('[4]: ' + mypath4);