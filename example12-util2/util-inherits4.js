var util = require('util');


// Create a Spy constructor function
function Spy () {
	this.standardIssue = 'standard issue blow up pen'
}

// Add something to the Spy constructor prototype
Spy.prototype.blowStuffUp = function() {
	console.log('blowing stuff up');
}


// Create a 'subClass' Spy constructor function
function BritishSecretServiceSpy () {
	Spy.call(this);
	this.pistol = 'Walther PPK',
	this.license = 'to kill or be killed'
}

// Create inheritance relationship
util.inherits(BritishSecretServiceSpy, Spy);


var bond = new BritishSecretServiceSpy();

// Access the prototype chain
bond.blowStuffUp();

// Access properties
console.log('Pistol: ' + bond.pistol);
console.log('License: ' + bond.license);
console.log('Standard Issue: ' + bond.standardIssue);
