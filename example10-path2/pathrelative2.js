var path = require('path');

//Relative method first tries to find a common base directory path
// Since arg1 and arg2 are both relative directories, each is first 
// resolved to `pwd` + arg so the common base is `pwd`
var mypath1 = path.relative('one/two', 'three/four');
console.log('[1]: ' + mypath1);
