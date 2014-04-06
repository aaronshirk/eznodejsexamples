// The resulting path is finally normalized
var path = require('path');

var mypath1 = path.resolve('///tmp/one/two//', 'three', '..', '.', 'finalpath');
console.log('[1]: ' + mypath1);
