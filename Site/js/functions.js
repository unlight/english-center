function getValue(key, collection, value, remove) {
	if (value == undefined) value = false;
	if (remove == undefined) remove = false;
	var result = value;
	if (typeof collection == 'object' && key in collection) {
		result = collection[key];
	}
	if (remove) {
		delete collection[key];
	}
	return result;
}

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
			var params = {
				request: request,
				responseText: request.responseText
			};
			if (typeof to == 'function') to(params);
			else to.innerHTML = request.responseText;
		}
	}
	request.send();
}

function addFavIcons() {
	var rootCollection = document.getElementsByTagName('section');
	for (var n = 0; n < rootCollection.length; n++) {
		var root = rootCollection[n];
		var anchors = root.getElementsByTagName('a');
		for (var i = 0, length = anchors.length; i < length; i++) {
			var anchor = anchors[i];
			if (anchor.parentNode.nodeName != "P") continue;
			var href = anchor.getAttribute('href');
			if (href.indexOf('//') != -1) {
				var iconUrl = 'http://g.etfv.co/' + encodeURIComponent(href);
				anchor.setAttribute('style', 'padding-left: 20px; background: transparent url('+iconUrl+') no-repeat center left');
			}
		}
	}
}
