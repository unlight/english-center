bindReady(function(){

	// 1. Replace of #CurrentYear
	var currentYear = document.getElementById('CurrentYear');
	currentYear.innerHTML = (new Date()).getFullYear();

	// 2. Pinned footer
	var frame = document.getElementById('Frame');
	PinnedFooter({frame: frame});
});