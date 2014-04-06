var path = require('path');

// Join arguments and automatically place path separators (/) between path elements
// Automatically normalize ///, .., .
var mypath1 = path.join('///' , '..', '..', '..', 'usr', 'local', 'bin');
console.log('[1]: ' + mypath1);

// Join arguments and normalize leading and trailing path separators (/)
var mypath2 = path.join('///', '..', '..', '..', 'usr/', '/local/', 'bin');
console.log('[2]: ' + mypath2);
