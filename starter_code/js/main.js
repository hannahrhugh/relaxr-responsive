$(function() {
	$('#hamburger').on('click', function() {
		$('nav').slideToggle();
	});

	$(window).on('resize', function() {
		if ($(window).width() >= 1000 && !$('nav').is(':visible')) {
			$('nav').show();
		} else if ($(window).width() < 1000 && $('nav').is(':visible')) {
			$('nav').hide();
		}
	});

});