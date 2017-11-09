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

$(document).ready(function() {
		$("form #submit").click(function() {

	var email= $(".Email").val();
	alert(email+" "+"has been successfully added to our list of subscribers.Thank you");
  });
});
