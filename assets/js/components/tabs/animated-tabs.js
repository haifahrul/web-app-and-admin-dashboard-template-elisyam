(function ($) {

    'use strict';
	
    // ------------------------------------------------------- //
    // Animated Tabs
    // ------------------------------------------------------ //
	$(function () {
		var b = "fadeInLeft";
		var c;
		var a;
		d($("#animate-tab a"), $("#animate-tab-content"));

		function d(e, f, g) {
			e.click(function (i) {
				i.preventDefault();
				$(this).tab("show");
				var h = $(this).data("easein");
				if (c) {
					c.removeClass(a);
				}
				if (h) {
					f.find("div.active").addClass("animated " + h);
					a = h;
				} else {
					if (g) {
						f.find("div.active").addClass("animated " + g);
						a = g;
					} else {
						f.find("div.active").addClass("animated " + b);
						a = b;
					}
				}
				c = f.find("div.active");
			});
		}
		
		$("a[rel=popover]").popover().click(function (f) {
			f.preventDefault();
			if ($(this).data("easein") != undefined) {
				$(this).next().removeClass($(this).data("easein")).addClass("animated " + $(this).data("easein"));
			} else {
				$(this).next().addClass("animated " + b);
			}
		});
	});

})(jQuery);