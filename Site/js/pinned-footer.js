function PinnedFooter(options) {
	var frame = options.frame;
	var body = options.body;
	var foot = options.foot;
	if (!foot) foot = frame.lastElementChild;
	if (!body) body = foot.previousElementSibling;
	
	if (!body) throw new Error("You should set body element which should be expanded.");
	
	var isVerticalScrollbar = function() {
		var root = document.documentElement;
		return (root.scrollHeight > root.clientHeight);
	}

	var getFrameHeight = function() {
		var result = 0;
		for (var i = 0, length = frame.children.length; i < length; i++) {
			var item = frame.children[i];
			result += item.offsetHeight;
		}
		return result;
	}

	var pin = function() {
		if (isVerticalScrollbar()) return;
		var footHeight = foot.offsetHeight;
		var windowHeight = window.innerHeight;
		var bodyAddend = windowHeight - getFrameHeight() - footHeight;
		var bodyHeight = body.offsetHeight;
		
		body.style.height = bodyHeight + bodyAddend + 'px';
	}

	if (window.addEventListener) {
		window.addEventListener('resize', pin);
		window.addEventListener('scroll', pin);
	}

	pin();
}