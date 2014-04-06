// Create a buffer of length 1
var buf = new Buffer(1);

// Write a valid 8 bit value to offset 0 
buf.writeUInt8(256, 0);
console.log(buf);