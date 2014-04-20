console.trace('TRACE-0');

function doTheNextThing(iter) {
	if (iter >= 10) return;
	console.trace('TRACE-' + iter);
	doTheNextThing(++iter);
	
}

doTheNextThing(1);