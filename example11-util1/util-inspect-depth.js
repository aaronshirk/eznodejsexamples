// Alter the depth of the inspect function
var util = require('util');

var business = {
	name : 'Arcane Industries',
	address : { 
		street1 : '123 Maple Ln',
		street2 : '',
		city : 'Paris',
		state : 'Oklahoma',
		zip : 00110
	},
	ceo : {
		person : {
			pastJob : {
				business : {
					name : 'XYZ Industries',
					address : {
						street1: '456 Baskin Dr',
						street2 : 'Apt 45B',
						city : 'Parkville',
						state : 'Florida',
						zip : 98765
					}, 
					ceo : {
						person : {
							pastJob : {
								business : {
									name : 'Root Recycling',
									address : {
										street1 : '93838 Hawthorne Alley',
										street2 : '',
										city : 'Caton',
										state : 'New York',
										zip : 12121
									},
									ceo : {
										person : {}
									}

								}
							}
						}, 
						doh : '02/02/2012',
						salary : {
							annualGrossValue : 90877666,
							currency : 'EURO'
						}
					}
				}
			}
		},
		doh : '01/01/1978',
		salary : {
			annualGrossValue : 45987,
			currency : 'USD'
		}
	}
};


var keys = Object.keys(business);
console.log('keys: ' + keys);


var options = {
	depth : null,
	colors : true
};

var result = util.inspect(business, options);
console.log(result);