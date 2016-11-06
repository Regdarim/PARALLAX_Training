$(window).on('scroll', function(){
	var wScroll = $(this).scrollTop();
	$('.logo').css({
		'transform': 'translate(0px, '+wScroll/2+'%)'

	});

	$('.backBird').css({
		'transform': 'translate(0px, '+wScroll/4+'%)'

	});
	$('.frontBird').css({
		'transform': 'translate(0px, -'+wScroll/40+'%)'

	});



})