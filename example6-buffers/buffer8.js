var buf1 = new Buffer('Man is distinguished, not only by his reason, but by this singular passion from toehr animals.', 'utf8');
console.log(buf1);
var string1 = buf1.toString('base64');
console.log(string1);

var buf2 = new Buffer(string1, 'base64');
console.log(buf2);
var string2 = buf2.toString('utf8');
console.log(string2);