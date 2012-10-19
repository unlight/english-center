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

function insertHtml(file, to) {
	var request = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
	//request.responseType = 'text';
	request.open('GET', file, false); 
	request.onreadystatechange = function() {
		if (request.readyState == 4) {
			to.innerHTML = request.responseText;
		}
	}
	request.send();
}

