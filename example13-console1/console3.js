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


// It appears %j prints a jsonObject to infinite depth, not just to depth of 2 which util.inspect defaults to
console.log('%j', jsonObject);
console.log();
console.log(util.inspect(jsonObject, {depth : null}));

// Both of these print to infinite depth, but %j is ugly, whereas util.inspect is pretty