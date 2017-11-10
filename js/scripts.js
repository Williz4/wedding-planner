$(document).ready(function() {
	$( ".displayed" ).hover(
	  function() {
	    $( ".displayed span" ).toggleClass("hidden");
  });

	$( "img.displayed" ).hover(function() {
	  $( this ).fadeOut( 100 );
	  $( this ).fadeIn( 500 );
	});



	$( ".displayed2" ).hover(
		function() {
			$( ".displayed2 span" ).toggleClass("hidden");
	});

	$( "img.displayed2" ).hover(function() {
		$( this ).fadeOut( 100 );
		$( this ).fadeIn( 500 );
	});


		// Four images side by side
		document.querySelector('.btn-cake6').addEventListener('click', function() {
		 var columns = document.getElementsByClassName('columning');
		 for (i = 0; i < columns.length; i++) {
			columns[i].style.width = "21%";
				}
			});

		// Two images side by side
		document.querySelector('.btn-cake5').addEventListener('click', function() {
		var columns = document.getElementsByClassName('columning');
		for (i = 0; i < columns.length; i++) {
		 columns[i].style.width = "20.5%";
			 }
		 });

		 // Full-width images
		 document.querySelector('.btn-cake4').addEventListener('click', function() {
		 var columns = document.getElementsByClassName('columning');
		 for (i = 0; i < columns.length; i++) {
			columns[i].style.width = "20%";
				}
			});


});

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
