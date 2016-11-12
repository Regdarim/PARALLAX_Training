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


	if(wScroll > $('.modelPics').offset().top - $(window).height()/1.2){
		$('.modelPics figure').each(function(i){
		setTimeout(function(){
				$('.modelPics figure').eq(i).addClass('isShowing');
			},750*Math.exp(i*0.15)-750);	
		
			});
	}

	


})