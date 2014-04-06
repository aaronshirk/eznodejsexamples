// Create a buffer
var buf1 = new Buffer("There is nothing either good or bad, but thinking makes it so.");
console.log("++++++++++++++++++++++++++++++++++++");
console.log('buf1 length: ' + buf1.length);
console.log('buf1: ' + buf1.toString());

// Slice the buffer
var buf2 = buf1.slice(37, buf1.length);
console.log("++++++++++++++++++++++++++++++++++++");
console.log('buf2 length: ' + buf2.length);
console.log('buf2: ' + buf2.toString());

// Change the sliced buffer
buf2.write('change!change!change!change!');
console.log('buf2 length: ' + buf2.length);
console.log('buf2: ' + buf2.toString());
console.log('buf1: ' + buf1.toString());
