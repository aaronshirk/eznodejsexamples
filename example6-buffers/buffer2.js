// Buffer of size 5 with string of size 5
var buf1 = new Buffer(5);
console.log('++++++++++++++++++++++++++++++');
buf1.write('hello', 0);
console.log('Buffer Length: ' + buf1.length);
console.log('Characters Written: ' + Buffer._charsWritten);
console.log(buf1.toString());
console.log(buf1);


// Buffer of size 5 with string of size 10
var buf2 = new Buffer(5);
console.log('++++++++++++++++++++++++++++++');
buf2.write('helloworld', 0);
console.log('Buffer Length: ' + buf2.length);
console.log('Characters Written: ' + Buffer._charsWritten);
console.log(buf2.toString());
console.log(buf2);

// Buffer of size 5 with string of size 3
var buf3 = new Buffer(5);
console.log('++++++++++++++++++++++++++++++');
buf3.write('buf', 0);
console.log('Buffer Length: ' + buf3.length);
console.log('Characters Written: ' + Buffer._charsWritten);
console.log(buf3.toString());
console.log(buf3);