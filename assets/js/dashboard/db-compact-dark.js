(function ($) {

	'use strict';

    // ------------------------------------------------------- //
    // Hit Rate
    // ------------------------------------------------------ //
    $('.hit-rate').circleProgress({
        value: 0.62,
        size: 140,
        startAngle: -Math.PI / 2,
        thickness: 6,
        lineCap: 'round',
        emptyFill: '#252946',
        fill: {
            gradient: ['#e76c90', '#e76c90']
        }
    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('.percent').html(Math.round(62 * progress) + '<i>%</i>');
    });	
	
    // ------------------------------------------------------- //
    // Happy Customers
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
	// Delivered Orders
	// ------------------------------------------------------ //
	var randomScalingFactor = function () {
		return (Math.random() > 0.5 ? 1.0 : 1.0) * Math.round(Math.random() * 100);
	};

	Chart.helpers.drawRoundedTopRectangle = function (ctx, x, y, width, height, radius) {
		ctx.beginPath();
		ctx.moveTo(x + radius, y);
		ctx.lineTo(x + width - radius, y);
		ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
		ctx.lineTo(x + width, y + height);
		ctx.lineTo(x, y + height);
		ctx.lineTo(x, y + radius);
		ctx.quadraticCurveTo(x, y, x + radius, y);
		ctx.closePath();
	};

	Chart.elements.RoundedTopRectangle = Chart.elements.Rectangle.extend({
		draw: function () {
			var ctx = this._chart.ctx;
			var vm = this._view;
			var left, right, top, bottom, signX, signY, borderSkipped;
			var borderWidth = vm.borderWidth;

			if (!vm.horizontal) {
				left = vm.x - vm.width / 2;
				right = vm.x + vm.width / 2;
				top = vm.y;
				bottom = vm.base;
				signX = 1;
				signY = bottom > top ? 1 : -1;
				borderSkipped = vm.borderSkipped || 'bottom';
			} else {
				left = vm.base;
				right = vm.x;
				top = vm.y - vm.height / 2;
				bottom = vm.y + vm.height / 2;
				signX = right > left ? 1 : -1;
				signY = 1;
				borderSkipped = vm.borderSkipped || 'left';
			}

			if (borderWidth) {
				var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
				borderWidth = borderWidth > barSize ? barSize : borderWidth;
				var halfStroke = borderWidth / 2;
				var borderLeft = left + (borderSkipped !== 'left' ? halfStroke * signX : 0);
				var borderRight = right + (borderSkipped !== 'right' ? -halfStroke * signX : 0);
				var borderTop = top + (borderSkipped !== 'top' ? halfStroke * signY : 0);
				var borderBottom = bottom + (borderSkipped !== 'bottom' ? -halfStroke * signY : 0);
				if (borderLeft !== borderRight) {
					top = borderTop;
					bottom = borderBottom;
				}
				if (borderTop !== borderBottom) {
					left = borderLeft;
					right = borderRight;
				}
			}

			var barWidth = Math.abs(left - right);
			var roundness = this._chart.config.options.barRoundness || 0.2;
			var radius = barWidth * roundness * 0.2;

			var prevTop = top;

			top = prevTop + radius;
			var barRadius = top - prevTop;

			ctx.beginPath();
			ctx.fillStyle = vm.backgroundColor;
			ctx.strokeStyle = vm.borderColor;
			ctx.lineWidth = borderWidth;

			Chart.helpers.drawRoundedTopRectangle(ctx, left, (top - barRadius + 1), barWidth, bottom - prevTop, barRadius);

			ctx.fill();
			if (borderWidth) {
				ctx.stroke();
			}

			top = prevTop;
		},
	});

	Chart.defaults.roundedBar = Chart.helpers.clone(Chart.defaults.bar);

	Chart.controllers.roundedBar = Chart.controllers.bar.extend({
		dataElementType: Chart.elements.RoundedTopRectangle
	});

	var ctx = document.getElementById("orders").getContext('2d');
	var myChart = new Chart(ctx, {
		type: 'roundedBar',
		data: {
			labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			datasets: [{
				label: 'Delivered',
				data: [30, 24, 22, 17, 22, 24, 9, 14, 20, 13, 17, 13],
				borderColor: "#2c304d",
				backgroundColor: "#e76c90",
				hoverBackgroundColor: "#e23f83"
			}, {
				label: 'Estimated',
				data: [10, 14, 12, 20, 20, 8, 10, 20, 7, 11, 8, 10],
				borderColor: "#2c304d",
				backgroundColor: "#aea9c3",
				hoverBackgroundColor: "#9d98b2"
			}]
		},
		options: {
			responsive: true,
			barRoundness: 1,
			tooltips: {
				backgroundColor: 'rgba(47, 49, 66, 0.8)',
				titleFontSize: 13,
				titleFontColor: '#fff',
				caretSize: 0,
				cornerRadius: 4,
				xPadding: 5,
				displayColors: false,
				yPadding: 5,
			},
			legend: {
				display: true,
				position: 'bottom',
				labels: {
					fontColor: "#aea9c3",
					usePointStyle: true,
					padding: 50,
					fontSize: 13
				}
			},
			scales: {
				xAxes: [{
					barThickness: 20,
					stacked: false,
					gridLines: {
						drawBorder: false,
						display: false
					},
					ticks: {
						display: true
					}
				}],
				yAxes: [{
					stacked: false,
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
	// Circle Orders
	// ------------------------------------------------------ //
	$('.circle-orders').circleProgress({
		value: 0.43,
		size: 120,
		startAngle: -Math.PI / 2,
		thickness: 6,
		lineCap: 'round',
		emptyFill: '#252946',
		fill: {
			gradient: ['#0087a4', '#08a6c3']
		}
	}).on('circle-animation-progress', function (event, progress) {
		$(this).find('.percent-orders').html(Math.round(43 * progress) + '<i>%</i>');
	});

	// ------------------------------------------------------- //
	// Top Author
	// ------------------------------------------------------ //
	var ctx = document.getElementById('sales-stats').getContext("2d");

	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["02/10", "02/11", "02/12", "02/13", "02/14", "02/15"],
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
				backgroundColor: '#2c304d',
				borderWidth: 3,
				data: [10, 6, 14, 8, 12, 10]
			}]
		},
		options: {
			tooltips: {
				backgroundColor: 'rgba(47, 49, 66, 0.8)',
				titleFontSize: 13,
				titleFontColor: '#fff',
				caretSize: 0,
				cornerRadius: 4,
				xPadding: 5,
				displayColors: false,
				yPadding: 5,
			},
			layout: {
				padding: {
					left: 0,
					right: 0,
					top: 0,
					bottom: 0
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
						maxTicksLimit: 2,
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

})(jQuery);