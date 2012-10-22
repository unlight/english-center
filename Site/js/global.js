bindReady(function(){

	var siteMenuWrapper = document.getElementById('SiteMenuWrapper');
	insertHtml('menu.html', siteMenuWrapper);

	insertHtml('search-module.html', function(params) {
		var responseText = params.responseText;
		var panel = document.getElementById('Panel');
		panel.innerHTML += responseText;
		var form = document.getElementById('SideSearchForm');
		form.addEventListener('submit', function(e) {
			var search = form.Search.value;
			var host = document.location.host;
			if (host != "") {
				var q = encodeURIComponent(search + ' site:' + host);
				var url  = "https://www.google.ru/?q=" + q + '#q=' + q;
				window.open(url);
			}
			e.preventDefault();
			return false;
		});
	});

	insertHtml('foot-module.html', function(params) {
		document.getElementById('Foot').innerHTML = params.responseText;
	});

	// Adding favicons.
	addFavIcons();

	// Replace of #CurrentYear
	var currentYear = document.getElementById('CurrentYear');
	currentYear.innerHTML = (new Date()).getFullYear();


	// Calculate cost.
	new function(){
		var price = {
			'category': {1: 1.2, 2: 1, 3: 1.5, 4: 1.3}
		};
		var calculateCostButton = document.getElementById('CalculateCostButton');
		if (calculateCostButton) {
			var form = calculateCostButton.form;
			var selectedIndex = form.Category.selectedIndex;
			var selectedOption = form.Category.children[selectedIndex];
			var coefficient = getValue(selectedOption.value, price.category);
		}
	}();

	// Lorem ipsum script.
	if (typeof fixie != 'undefined') {
		fixie.init();
	}

	// Last. Pinned footer.
	var frame = document.getElementById('Frame');
	PinnedFooter({frame: frame});

});