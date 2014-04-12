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
	this.pistol = 'Walther PPK',
	this.license = 'to kill or be killed'
}

// Have Bond inherit from spy
BritishSecretServiceSpy.prototype = Object.create(Spy.prototype);

// Now create an 'instance' of BritishSecretServiceSpy
var bond = new BritishSecretServiceSpy();

// Access the prototype chain
bond.blowStuffUp();

// Access properties
console.log('Pistol: ' + bond.pistol);
console.log('License: ' + bond.license);
console.log('Standard Issue: ' + bond.standardIssue);