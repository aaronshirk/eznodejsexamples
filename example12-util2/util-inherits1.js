// Create a constructor
function MyFunction () {
	this.property1 = 'prop1 value',
	this.property2 = 'prop2 value'
}

// Add something to the constructor prototype
MyFunction.prototype.doSomething = function() {
	console.log('doing something');
}

var obj1 = new MyFunction();
// equivalent to ...
var obj2 = Object.create(MyFunction.prototype);

// Access the properties:
console.log('====  Accessing Prototype ====');
obj1.doSomething();
obj2.doSomething();

// Object.create can't introspect the constructor initialization code
console.log('====  Accessing Properties ====');
console.log('obj1 property1: ' + obj1.property1);
console.log('obj1 property2: ' + obj1.property2);
console.log('obj2 property1: ' + obj2.property1);
console.log('obj2.property2: ' + obj2.property2);
