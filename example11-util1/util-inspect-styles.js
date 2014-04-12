// Modify the styles of the inspect function
var util = require('util');
var colors = util.inspect.colors;
var styles = util.inspect.styles;

console.log('colors: ' + util.inspect(colors));
console.log('styles: ' + util.inspect(styles) + '\n\n');

var randomObject = {
	someNumber : 123,
	someBoolean : true,
	someUndefined : undefined,
	someNullValue : null,
	someString : 'hello world',
	someDate : new Date(),
	someRegex : /someregex/

}

console.log(util.inspect(randomObject, { colors : true}));

util.inspect.styles.special = 'underline';
util.inspect.styles.number = 'underline';
util.inspect.styles.boolean = 'underline';
util.inspect.styles.undefined = 'underline';
util.inspect.styles.null = 'underline';
util.inspect.styles.string = 'underline';
util.inspect.styles.date = 'underline';
util.inspect.styles.regexp = 'underline';

console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++');
console.log('New styles: ' + util.inspect(util.inspect.styles) + '\n\n');

console.log(util.inspect(randomObject, {colors : true}));

