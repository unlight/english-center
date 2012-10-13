bindReady(function(){

	// 1. Replace of #CurrentYear
	var currentYear = document.getElementById('CurrentYear');
	currentYear.innerHTML = (new Date()).getFullYear();
});