(function ($) {

    'use strict';
	
    $(function() {
        /**
        * Smooth scrolling to page anchor on click
        **/
        $("a[href*='#']:not([href='#'])").click(function() {
            if (
                location.hostname == this.hostname
                && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
            ) {
                var anchor = $(this.hash);
                anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
                if ( anchor.length ) {
                    $("html, body").animate( { scrollTop: anchor.offset().top }, 800);
                }
            }
        });
    });

	$(function() {
		// Custom 
		var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
			var stickyHeight = sticky.outerHeight();
			var stickyTop = stickyWrapper.offset().top;
			if (scrollElement.scrollTop() >= stickyTop) {
				stickyWrapper.height(stickyHeight);
				sticky.addClass("is-sticky");
			} else {
				sticky.removeClass("is-sticky");
				stickyWrapper.height('auto');
			}
		};

		// Find all data-toggle="sticky-onscroll" elements
		$('[data-toggle="sticky-onscroll"]').each(function () {
			var sticky = $(this);
			var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
			sticky.before(stickyWrapper);
			sticky.addClass('sticky');

			// Scroll & resize events
			$(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
				stickyToggle(sticky, stickyWrapper, $(this));
			});

			// On page load
			stickyToggle(sticky, stickyWrapper, $(window));
		});
	});

	
})(jQuery);