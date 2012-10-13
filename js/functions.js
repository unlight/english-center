function bindReady(f) {
	if (document.addEventListener) {
		document.addEventListener('DOMContentLoaded', f);
	} else {
		var oldWindowLoad = window.load;
		var newWindowLoad = function() {
			if (typeof oldWindowLoad == 'function') oldWindowLoad();
			f();
		};
		window.load = newWindowLoad;
	}
}


