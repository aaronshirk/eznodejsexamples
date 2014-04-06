// Working with dirctories and files
var path = require('path');

var mypath1 = path.join('///' , '..', '..', '..', 'usr', 'local', 'bin');
console.log('[1]: ' + mypath1);

// Join arguments and normalize leading and trailing path separators (/)
var mypath2 = path.join('///', '..', '..', '..', 'usr/', '/local/', 'bin', 'helloworld.txt', 'path1');
console.log('[2]: ' + mypath2);
