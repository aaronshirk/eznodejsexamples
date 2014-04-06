var buf1 = new Buffer(4);
buf1[0] = 0xff;
buf1[1] = 0xff;
buf1[2] = 0xff;
buf1[3] = 0xff;

// Read a buffer as unsigned integer
console.log(buf1.readUInt32LE(0));

// Read a buffer as a signed integer
console.log(buf1.readInt32LE(0));

