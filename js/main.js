// jquery ready start
$(document).ready(function() {
	// jQuery code

	 //////////////////////// Menu scroll to section
    $('.scrollto').click(function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({ scrollTop: $($anchor.attr('href')).offset().top - 40  }, 1500);
        event.preventDefault();
    });
		
	///////////////// for small screen
    if ($(window).width() < 992) {

		/////////////////////// Closes the Responsive Menu on Menu Item Click
	    $('.navbar-collapse a.scrollto').click(function() {
	        $('.navbar-toggler:visible').click();
	    });
	}

}); // jquery end