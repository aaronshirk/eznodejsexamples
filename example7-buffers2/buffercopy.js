// Create a buffer
var buf1 = new Buffer("There is nothing either good or bad, but thinking makes it so.");
console.log("++++++++++++++++++++++++++++++++++++");
console.log('buf1 length: ' + buf1.length);
console.log('buf1: ' + buf1.toString());


// Copy the buffer
var buf2 = new Buffer(10);
buf1.copy(buf2, 0, 37);
console.log("++++++++++++++++++++++++++++++++++++");
console.log('buf2 length: ' + buf2.length);
console.log('buf2: ' + buf2.toString());

// Try to modify buf2 and see if it affects buf1
buf2.write('ChangeNow!');
console.log("++++++++++++++++++++++++++++++++++++");
console.log('buf2 length: ' + buf2.length);
console.log('buf2: ' + buf2.toString());
console.log('buf1: ' + buf1.toString());

