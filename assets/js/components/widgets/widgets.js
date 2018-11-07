(function ($) {

    'use strict';
	
	// ------------------------------------------------------- //
	// Widget 01 (Happy Customers)
	// ------------------------------------------------------ //
	$('.circle').circleProgress({
		value: 0.87,
		size: 150,
		startAngle: -Math.PI / 2,
		thickness: 14,
		lineCap: 'round',
		emptyFill: '#f0eff4',
		fill: {
			gradient: ['#f9a58d', '#e76c90']
		}
	}).on('circle-animation-progress', function (event, progress) {
		$(this).find('.percent').html(Math.round(87 * progress) + '<i>%</i>');
	});

	// ------------------------------------------------------- //
	// Widget 01 (Today Sales)
	// ------------------------------------------------------ //
	var ctx = document.getElementById('today-chart').getContext("2d");

	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["13:00", "14:05", "14:20", "14:32", "15:47", "16:30"],
			datasets: [{
				label: "Sales",
				borderColor: '#08a6c3',
				pointRadius: 0,
				pointHitRadius: 5,
				pointHoverRadius: 3,
				pointHoverBorderColor: "#08a6c3",
				pointHoverBackgroundColor: "#08a6c3",
				pointHoverBorderWidth: 3,
				fill: true,
				backgroundColor: '#fff',
				borderWidth: 3,
				data: [10, 12, 8, 14, 8, 10]
			}]
		},
		options: {
			tooltips: {
				backgroundColor: 'rgba(47, 49, 66, 0.8)',
				titleFontSize: 13,
				titleFontColor: '#fff',
				caretSize: 0,
				cornerRadius: 4,
				xPadding: 8,
				displayColors: false,
				yPadding: 8,
			},
			layout: {
				padding: {
					left: 0,
					right: 0,
					top: 5,
					bottom: 5
				}
			},
			legend: {
				display: false
			},
			scales: {
				yAxes: [{
					ticks: {
						display: false,
						beginAtZero: false,
						maxTicksLimit: 3,
					},
					gridLines: {
						drawBorder: false,
						display: false
					}
				}],
				xAxes: [{
					gridLines: {
						drawBorder: false,
						display: false
					},
					ticks: {
						display: false
					}
				}]
			}
		}
	});

	// ------------------------------------------------------- //
	// Widget 02 (Activity) 
	// ------------------------------------------------------ //
	var ctx = document.getElementById('sale-chart').getContext("2d");

	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["September", "October", "November", "December", "January", "Febuary"],
			datasets: [{
					label: "Sales",
					borderColor: "#e76c90",
					pointBackgroundColor: "#e76c90",
					pointHoverBorderColor: "#e76c90",
					pointHoverBackgroundColor: "#e76c90",
					pointBorderColor: "#fff",
					pointBorderWidth: 3,
					pointRadius: 6,
					fill: true,
					backgroundColor: "transparent",
					borderWidth: 4,
					data: [70, 80, 105, 80, 140, 120]
				},
				{
					label: "Visitors",
					borderColor: "#5d5386",
					pointBackgroundColor: "#5d5386",
					pointHoverBorderColor: "#342868",
					pointHoverBackgroundColor: "#342868",
					pointBorderColor: "#fff",
					pointBorderWidth: 3,
					pointRadius: 6,
					fill: true,
					backgroundColor: "transparent",
					borderWidth: 3,
					borderDash: [10, 5],
					data: [90, 100, 80, 120, 100, 110]
				}
			]
		},
		options: {
			legend: {
				display: false
			},
			tooltips: {
				backgroundColor: 'rgba(47, 49, 66, 0.8)',
				titleFontSize: 13,
				titleFontColor: '#fff',
				caretSize: 0,
				cornerRadius: 4,
				xPadding: 10,
				displayColors: false,
				yPadding: 10
			},
			layout: {
				padding: {
					left: -10,
					right: 0,
					top: 0,
					bottom: 0
				}
			},
			scales: {
				yAxes: [{
					ticks: {
						display: false,
						beginAtZero: false,
						maxTicksLimit: 3
					},
					gridLines: {
						drawBorder: false,
						display: false
					}
				}],
				xAxes: [{
					gridLines: {
						drawBorder: false,
						display: false
					},
					ticks: {
						display: false
					}
				}]
			}
		}
	});

    // ------------------------------------------------------- //
    // Widget 14 (Calendar)
    // ------------------------------------------------------ //	
	$('.widget14').owlCarousel({
		center: true,
		items: 2,
		dots: false,
		nav: true,
		loop: false,
		smartSpeed:1000,
		navText: ['<i class="la la-angle-left" aria-hidden="true"></i>', '<i class="la la-angle-right" aria-hidden="true"></i>'],
		responsive: {
			768: {
				items: 3
			}
		}
	});
	
    // ------------------------------------------------------- //
    // Widget 15 (Weather)
    // ------------------------------------------------------ //
	$('.widget15-weekly').owlCarousel({
		dots: true,
		nav: false,
		loop: false,
		responsiveClass:true,
		navText: ['<i class="la la-angle-left" aria-hidden="true"></i>', '<i class="la la-angle-right" aria-hidden="true"></i>'],
		responsive:{
			0:{
				items:1,
				loop:true
			},
			600:{
				items:3
			},
			1000:{
				items:3
			}
		}
	});
	
	$('.widget15-hourly').owlCarousel({
		dots: false,
		nav: true,
		loop: true,
		responsiveClass:true,
		navText: ['<i class="la la-angle-left" aria-hidden="true"></i>', '<i class="la la-angle-right" aria-hidden="true"></i>'],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:3
			}
		}
	});
	
    // ------------------------------------------------------- //
    // Widget 16 (Pages Views)
    // ------------------------------------------------------ //
    $('.pages-views').circleProgress({
        value: 0.54,
        size: 120,
        startAngle: -Math.PI / 2,
        thickness: 10,
        lineCap: 'round',
        emptyFill: '#f0eff4',
        fill: {
            gradient: ['#f9a58d', '#e76c90']
        }
    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('.percent').html('<i>+</i>' + Math.round(54 * progress) + '<i>%</i>');
    });
	
    // ------------------------------------------------------- //
    // Widget 17 (Visitors Online)
    // ------------------------------------------------------ //	
    $('.visitors').circleProgress({
        value: 0.37,
        size: 120,
        startAngle: -Math.PI / 2,
        thickness: 10,
        lineCap: 'round',
        emptyFill: '#f0eff4',
        fill: {
            gradient: ['#0087a4', '#08a6c3']
        }
    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('.percent').html('<i>+</i>' + Math.round(37 * progress) + '<i>%</i>');
    });
	
    // ------------------------------------------------------- //
    // Widget 20 (Files)
    // ------------------------------------------------------ //
	$('.widget20').owlCarousel({
		dots: true,
		nav: false,
		loop: true,
		responsiveClass:true,
		navText: ['<i class="la la-angle-left" aria-hidden="true"></i>', '<i class="la la-angle-right" aria-hidden="true"></i>'],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:2
			}
		}
	});
	
    // ------------------------------------------------------- //
    // Widget 21 (Hit Rate)
    // ------------------------------------------------------ //
    $('.hit-rate').circleProgress({
        value: 0.62,
        size: 140,
        startAngle: -Math.PI / 2,
        thickness: 6,
        lineCap: 'round',
        emptyFill: '#f0eff4',
        fill: {
            gradient: ['#c44a4a', '#fe195e']
        }
    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('.percent').html(Math.round(62 * progress) + '<i>%</i>');
    });	
	
    // ------------------------------------------------------- //
    // Widget 22 (Happy Customers)
    // ------------------------------------------------------ //
    $('.happy-customers').circleProgress({
        value: 0.85,
        size: 140,
        startAngle: -Math.PI / 2,
        thickness: 6,
        lineCap: 'round',
        emptyFill: 'rgba(255, 255, 255, 0.15)',
        fill: {
            gradient: ['#fff', '#fff']
        }
    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('.percent').html(Math.round(85 * progress) + '<i>%</i>');
    });	
	
    // ------------------------------------------------------- //
    // Widget 32
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
	
})(jQuery);