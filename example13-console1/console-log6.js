var util = require('util');

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


// %j prints a jsonObject to infinite depth, not just to depth of 2 which util.inspect defaults to
console.log('===== With format string =========================');
console.log('%j', jsonObject);
console.log();
console.log(util.inspect(jsonObject, {depth : null}));
// Both of these print to infinite depth, but %j is ugly, whereas util.inspect is pretty