console.time('10-seconds');



function takeMyTime(times) {
	console.log(times);
	setTimeout(function() {
		if (times === 0) {
			endTimer();
			return;
		}
		takeMyTime(--times);
	}, 1000);
}


function endTimer() {
	console.timeEnd('10-seconds');
}

takeMyTime(10);