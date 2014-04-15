
// placeholders with numeric data
console.log('%j', 44);
console.log('%s', 44);
console.log('%d', 44);

// placeholder with no corresponding argument
console.log('%j');
console.log('%s');
console.log('%d');

// placeholders with object data
console.log('%j', {a : 1, b : 2, c : 3});
console.log('%s', {a : 1, b : 2, c : 3});
console.log('%d', {a : 1, b : 2, c : 3});


// placeholders with string data
console.log('%j', 'this is just another string');
console.log('%s', 'this is just another string');
console.log('%d', 'this is just another string');


// more placeholders than arguments
var balance = 5678.87;
var initialDeposite = 3000.00;
var name = 'Hinrick';
console.log('==================== %s\'s Bank Account Information ====================\n'
			+ '1. Current bank account balance: [%d]\n'
			+ '2. Initial opening deposite: [%d]\n' 
			+ '3. Last purchase in the amount of: [%d]\n', name, balance, initialDeposite);



// less placeholders than arguments
var balance = 5678.87;
var initialDeposite = 3000.00;
var lastPurchaseAmount = 78.99;
var emergencyContact = 'Intock Guetenburg';
var name = 'Hinrick';
console.log('==================== %s\'s Bank Account Information ====================\n'
			+ '1. Current bank account balance: [%d]\n'
			+ '2. Initial opening deposite: [%d]\n' 
			+ '3. Last purchase in the amount of: [%d]\n'
			, name, balance, initialDeposite, lastPurchaseAmount, emergencyContact);



// No format string
// just applies util.inspect to each argument
console.log('hello', '-', 'world', '%s:%d');







