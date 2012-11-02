new function() {

	var Timer = document.getElementById('Timer');
	var StartTime = (new Date()).getTime();

	setTimeout(function() {
		var Time = ((new Date()).getTime() - StartTime);
		Time = Math.floor(Time / 1000);
		var Minutes = Math.floor(Time / 60);
		var Seconds = Time % 60;

		Timer.innerHTML = ('0'+Minutes).substr(-2) + ':' + ('0'+Seconds).substr(-2);

		setTimeout(arguments.callee, 400);
	}, 400);
}