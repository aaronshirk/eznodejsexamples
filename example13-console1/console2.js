var util = require('util');
// Let's look at a json example
// If there is not format string in the first arguement, console.log uses util.inspect on each argument
var jsonObject = {
	a : {
		b : {
			c : {
				d : {
					name: 'name',
					date: '4/11/14',
					location: 'next door'
				},
				e : {
					numberItems: 55,
					paidOff: true
				}
			},
			f: 4,
			g: 5,
			h: 6
		}
	}, 
	i : 'blue',
	j : 'green', 
	k : 'indigo',
	l : 'violet'
};

console.log(jsonObject);
console.log();
console.log(util.inspect(jsonObject));



console.log('%j', jsonObject);
console.log();

console.log();
console.log(util.inspect(jsonObject, {depth : null}));