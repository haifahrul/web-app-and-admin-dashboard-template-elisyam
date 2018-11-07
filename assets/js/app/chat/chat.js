(function ($) {

    'use strict';
	
    // ------------------------------------------------------- //
    // Friends Sidebar
    // ------------------------------------------------------ //
    $(".friends-scroll").niceScroll({
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
    $(".messages-scroll").niceScroll({
        railpadding: {
            top: 10,
            right: 2,
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

})(jQuery);