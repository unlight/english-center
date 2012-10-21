jQuery(function(){

	mosho.plugin({
		name: "NumberedSlides",
		postShow: function (evt) {
			var slide = mosho.getElement();
			var pos = slide.order;
			var number = $('#SlideNumber');
			if (number.length == 0) {
				number = $('<span>', {
					'id': 'SlideNumber'
				});
				$('body').append(number);
			}
			number.html(pos);
		}
	});

	var currentTime;
	var startTime = (new Date()).getTime();
	var timeBox = $('<span>', {
		'id': 'TimeBox'
	});
	$('body').append(timeBox);
	var drawTimeBoxTick = function() {
		var elapsedTime = (new Date()).getTime() - startTime;
		var elapsedDate = new Date(elapsedTime);
		var minutes = elapsedDate.getMinutes();
		minutes = ('0' + minutes).slice(-2);
		var seconds = elapsedDate.getSeconds();
		seconds = ('0' + seconds).slice(-2);
		timeBox.html(minutes + ':' + seconds);
		setTimeout(drawTimeBoxTick, Math.round(Math.random() * 1000));
	}

	mosho.plugin({
		name: "Timer",
		postShow: function (evt) {
			drawTimeBoxTick();
		}
	});

	mosho.init(); 

});
