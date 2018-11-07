(function ($) {

    'use strict';
	
    // ------------------------------------------------------- //
    // Messages List
    // ------------------------------------------------------ //
    $(".list-scroll").niceScroll({
        railpadding: {
            top: 0,
            right: 0,
            left: 0,
            bottom: 0
        },
        scrollspeed: 100,
        zindex: "999",
        autohidemode: "leave",
        cursorwidth: "0px",
        cursorcolor: "transparent",
        cursorborder: "transparent"
    });

    // ------------------------------------------------------- //
    // Message Scroll
    // ------------------------------------------------------ //
    $(".mail-scroll").niceScroll({
        railpadding: {
            top: 10,
            right: 2,
            left: 0,
            bottom: 0
        },
        scrollspeed: 100,
        zindex: "999",
        autohidemode: "leave",
        cursorwidth: "4px",
        cursorcolor: "rgba(148, 164, 176, 0.2)",
        cursorborder: "rgba(148, 164, 176, 0.2)"
    });
		
    // ------------------------------------------------------- //
    // Photoswipe
    // ------------------------------------------------------ //
	var $pswp = $('.pswp')[0];
	var image = [];
	$('.photoswipe').each(function () {
		var $pic = $(this),
			getItems = function () {
				var items = [];
				$pic.find('a').each(function () {
					var $href = $(this).attr('href'),
						$size = $(this).data('size').split('x'),
						$width = $size[0],
						$height = $size[1];
					var item = {
						src: $href,
						w: $width,
						h: $height
					}
					items.push(item);
				});
				return items;
			}
		var items = getItems();
		$.each(items, function (index, value) {
			image[index] = new Image();
			image[index].src = value['src'];
		});
		var $pswp = $('.pswp')[0];
		$pic.on('click', 'figure', function (event) {
			event.preventDefault();

			var $index = $(this).index();
			var options = {
				index: $index,
				bgOpacity: 0.8,
				showHideOpacity: true
			}

			// Initialize PhotoSwipe
			var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
			lightBox.init();
		});
	});

})(jQuery);