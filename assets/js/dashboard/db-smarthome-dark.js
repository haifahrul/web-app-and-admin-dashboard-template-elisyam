(function ($) {

	'use strict';
	
    // ------------------------------------------------------- //
    // Date & Time
    // ------------------------------------------------------ //
	function getDate() {
		var date = new Date();
		var weekday = date.getDay();
		var month = date.getMonth();
		var day = date.getDate();
		var year = date.getFullYear();
		var hour = date.getHours();
		var minutes = date.getMinutes();

		if (hour < 10) hour = "0" + hour;
		if (minutes < 10) minutes = "0" + minutes;

		var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		var weekdayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
		var ampm = " PM ";

		if (hour < 12) ampm = " AM ";

		if (hour > 12) hour -= 12;

		var showDay = weekdayNames[weekday];
		var showDate = day;
		var showYear = monthNames[month] + " " + year;
		var showTime = hour + ":" + minutes + " " + ampm;
		document.getElementById('events-day').innerHTML = showDay;
		document.getElementById('events-date').innerHTML = showDate;
		document.getElementById('events-year').innerHTML = showYear;
		document.getElementById('events-time').innerHTML = showTime;
		requestAnimationFrame(getDate);
	}

	getDate();
	
    // ------------------------------------------------------- //
    // Devices
    // ------------------------------------------------------ //
	$('.widget29').owlCarousel({
		dots: false,
		nav: true,
		loop: true,
		smartSpeed:500,
		navText: ['<i class="ion-chevron-left" aria-hidden="true"></i>', '<i class="ion-chevron-right" aria-hidden="true"></i>'],
		responsive:{
			0:{
				items:1,
				nav:false
			},
			600:{
				items:3,
				nav:false
			},
			1000:{
				items:7,
				nav:true
			}
		}
	});
	
    // ------------------------------------------------------- //
    // Thermostat
    // ------------------------------------------------------ //
	const temperature = document.querySelector(".degrees");
	const up = document.querySelector(".up i");
	const down = document.querySelector(".down i");
	var number = 24;

	temperature.innerHTML = number;

	function hotter() {
		up.style.opacity = "1";
		down.style.opacity = "1";

		if (number < 38) {
			number++;
			temperature.innerHTML = number;
		}

		if (number === 38) {
			up.style.opacity = "0.3";
		}
	}

	function colder() {
		up.style.opacity = "1";
		down.style.opacity = "1";

		if (number > 0) {
			number--;
			temperature.innerHTML = number;
		}

		if (number === 0) {
			down.style.opacity = "0.3";
		}
	}

	up.addEventListener("click", hotter);
	down.addEventListener("click", colder);	
	
    // ------------------------------------------------------- //
    // Water
    // ------------------------------------------------------ //
    $('.water').circleProgress({
        value: .30,
        size: 100,
        startAngle: -Math.PI / 2,
        thickness: 6,
        lineCap: 'round',
        emptyFill: '#252946',
        fill: {
            gradient: ['#19a4ec', '#6acbe0']
        }
    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('.percent').html(Math.round(6 * progress) + '<i>m3</i>');
    });
	
    // ------------------------------------------------------- //
    // Electricity
    // ------------------------------------------------------ //
    $('.electricity').circleProgress({
        value: .50,
        size: 100,
        startAngle: -Math.PI / 2,
        thickness: 6,
        lineCap: 'round',
        emptyFill: '#252946',
        fill: {
            gradient: ['#e23f83', '#ea5844']
        }
    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('.percent').html(Math.round(200 * progress) + '<i>kw</i>');
    });
	
    // ------------------------------------------------------- //
    // Gas
    // ------------------------------------------------------ //
    $('.gas').circleProgress({
        value: .75,
        size: 100,
        startAngle: -Math.PI / 2,
        thickness: 6,
        lineCap: 'round',
        emptyFill: '#252946',
        fill: {
            gradient: ['#00c9ff', '#92fe9d']
        }
    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('.percent').html(Math.round(31 * progress) + '<i>mpg</i>');
    });

})(jQuery);