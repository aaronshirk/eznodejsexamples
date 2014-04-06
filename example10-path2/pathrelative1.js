var path = require('path');

//Relative method first tries to find a common base directory path
// In this case the common base is /one/two/three
var mypath1 = path.relative('/one/two/three/usr/local/bin', '/one/two/three/tmp/node/local');
console.log('[1]: ' + mypath1);