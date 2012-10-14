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

/*function includeHtml(file) {
	var request = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
	//request.responseType = 'text';
	request.open('GET', file); 
	request.onreadystatechange = function() {
		if (request.readyState == 4) {
			console.log(request.responseXML);
			//document.write(request.responseText);
			//document.close();
		}
	}
	request.send(null);
}*/