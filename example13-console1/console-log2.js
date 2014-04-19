// placeholders with numeric data
console.log(' * Numeric Data');
console.log('number is %j', 44);
console.log('number is %s', 44);
console.log('number is %d', 44);


// placeholders with object data
console.log('\n * Object Data');
console.log('object is %j', {a : 1, b : 2, c : 3});
console.log('object is %s', {a : 1, b : 2, c : 3});
console.log('object is %d', {a : 1, b : 2, c : 3});


// placeholders with string data
console.log('\n * string');
console.log('string is %j', 'this is just another string');
console.log('string is %s', 'this is just another string');
console.log('string is %d', 'this is just another string');

// placeholder with no corresponding argument
console.log('\n * No Data');
console.log('%j');
console.log('%s');
console.log('%d');

// No format string
// just applies util.inspect to each argument
console.log('\n * No Format String');
console.log('hello', '-', 'world', '%s:%d');

