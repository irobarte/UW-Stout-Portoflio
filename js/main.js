// Adapted from https://stackoverflow.com/questions/11917216/dynamically-changing-class-name-based-on-window-size

$(document).ready(function() {
	var $window = $(window);

	// Function to handle changes to style classes based on window width
	function checkWidth() {
		if ($window.width() < 980) {
			$('.nav-one').removeClass('nav-right');
			$('.nav-two').removeClass('nav-left');
			$('.nav-one, .nav-two').addClass('nav-center');
		};

		if ($window.width() >= 980) {
			$('.nav-one').addClass('nav-right');
			$('.nav-two').addClass('nav-left');
			$('.nav-one, .nav-two').removeClass('nav-center');
		}
	}

	// Execute on load
	checkWidth();

	// Bind event listener
	$(window).resize(checkWidth);
});