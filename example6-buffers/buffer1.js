var buf = new Buffer('hello', 'utf8');
console.log('Buffer Length: ' + buf.length);
console.log('Characters Written: ' + Buffer._charsWritten);
console.log(buf.toString('utf8'));
console.log(buf);