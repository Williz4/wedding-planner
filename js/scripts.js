$(window).scroll(function() {

	var wScroll = $(this).scrollTop();

	if(wScroll > $('#servicez').offset().top - $(window).height() / 1.2) {

		$('#servicez .figure').each(function(i){
			
		setTimeout(function() {
			$('#servicez .figure').eq(i).addClass('is-showing');
			
			}, 120 * (i + 1));

		});

	}
 
});