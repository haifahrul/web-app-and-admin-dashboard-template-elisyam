(function ($) {

    'use strict';
	
	// ------------------------------------------------------- //
	// Top
	// ------------------------------------------------------ //
	$('body').on('click', '#example-top', function (e) {
		 new Noty({
			type: 'notification',
			layout: 'top',
			text: 'Hey this is an example notification.',
			closeWith: ['click', 'button'],
			animation: {
				open: 'animated bounceInDown', // Animate.css class names
				close: 'animated bounceOutUp' // Animate.css class names
			}
		}).show()
	})
	
	// ------------------------------------------------------- //
	// Top Left
	// ------------------------------------------------------ //
	$('body').on('click', '#example-top-left', function (e) {
		 new Noty({
			type: 'notification',
			layout: 'topLeft',
			text: 'Hey this is an example notification.',
			closeWith: ['click', 'button'],
			animation: {
				open: 'animated bounceInLeft', // Animate.css class names
				close: 'animated bounceOutLeft' // Animate.css class names
			}
		}).show()
	})
	
	// ------------------------------------------------------- //
	// Top Center
	// ------------------------------------------------------ //
	$('body').on('click', '#example-top-center', function (e) {
		 new Noty({
			type: 'notification',
			layout: 'topCenter',
			text: 'Hey this is an example notification.',
			closeWith: ['click', 'button'],
			animation: {
				open: 'animated bounceInDown', // Animate.css class names
				close: 'animated bounceOutUp' // Animate.css class names
			}
		}).show()
	})
	
	// ------------------------------------------------------- //
	// Top Right
	// ------------------------------------------------------ //
	$('body').on('click', '#example-top-right', function (e) {
		 new Noty({
			type: 'notification',
			layout: 'topRight',
			text: 'Hey this is an example notification.',
			closeWith: ['click', 'button'],
			animation: {
				open: 'animated bounceInRight', // Animate.css class names
				close: 'animated bounceOutRight' // Animate.css class names
			}
		}).show()
	})
	
	// ------------------------------------------------------- //
	// Center
	// ------------------------------------------------------ //
	$('body').on('click', '#example-center', function (e) {
		 new Noty({
			type: 'notification',
			layout: 'center',
			text: 'Hey this is an example notification.',
			closeWith: ['click', 'button'],
			animation: {
				open: 'animated fadeInDown', // Animate.css class names
				close: 'animated fadeOutUp' // Animate.css class names
			}
		}).show()
	})
	
	// ------------------------------------------------------- //
	// Center Left
	// ------------------------------------------------------ //
	$('body').on('click', '#example-center-left', function (e) {
		 new Noty({
			type: 'notification',
			layout: 'centerLeft',
			text: 'Hey this is an example notification.',
			closeWith: ['click', 'button'],
			animation: {
				open: 'animated bounceInLeft', // Animate.css class names
				close: 'animated bounceOutLeft' // Animate.css class names
			}
		}).show()
	})
	
	// ------------------------------------------------------- //
	// Center Right
	// ------------------------------------------------------ //
	$('body').on('click', '#example-center-right', function (e) {
		 new Noty({
			type: 'notification',
			layout: 'centerRight',
			text: 'Hey this is an example notification.',
			closeWith: ['click', 'button'],
			animation: {
				open: 'animated bounceInRight', // Animate.css class names
				close: 'animated bounceOutRight' // Animate.css class names
			}
		}).show()
	})
	
	// ------------------------------------------------------- //
	// Bottom
	// ------------------------------------------------------ //
	$('body').on('click', '#example-bottom', function (e) {
		 new Noty({
			type: 'notification',
			layout: 'bottom',
			text: 'Hey this is an example notification.',
			closeWith: ['click', 'button'],
			animation: {
				open: 'animated bounceInUp', // Animate.css class names
				close: 'animated bounceOutDown' // Animate.css class names
			}
		}).show()
	})
	
	// ------------------------------------------------------- //
	// Bottom Left
	// ------------------------------------------------------ //
	$('body').on('click', '#example-bottom-left', function (e) {
		 new Noty({
			type: 'notification',
			layout: 'bottomLeft',
			text: 'Hey this is an example notification.',
			closeWith: ['click', 'button'],
			animation: {
				open: 'animated bounceInLeft', // Animate.css class names
				close: 'animated bounceOutLeft' // Animate.css class names
			}
		}).show()
	})
	
	// ------------------------------------------------------- //
	// Bottom Center
	// ------------------------------------------------------ //
	$('body').on('click', '#example-bottom-center', function (e) {
		 new Noty({
			type: 'notification',
			layout: 'bottomCenter',
			text: 'Hey this is an example notification.',
			closeWith: ['click', 'button'],
			animation: {
				open: 'animated bounceInUp', // Animate.css class names
				close: 'animated bounceOutDown' // Animate.css class names
			}
		}).show()
	})
	
	// ------------------------------------------------------- //
	// Bottom Right
	// ------------------------------------------------------ //
	$('body').on('click', '#example-bottom-right', function (e) {
		 new Noty({
			type: 'notification',
			layout: 'bottomRight',
			text: 'Hey this is an example notification.',
			closeWith: ['click', 'button'],
			animation: {
				open: 'animated bounceInRight', // Animate.css class names
				close: 'animated bounceOutRight' // Animate.css class names
			}
		}).show()
	})
	
	// ------------------------------------------------------- //
	// Top Left (Delay)
	// ------------------------------------------------------ //
	$('body').on('click', '#example-top-left-delay', function (e) {
		 new Noty({
			type: 'notification',
			layout: 'topLeft',
			text: 'Hey this is an example notification.',
			progressBar: true,
			timeout: 2500,
			animation: {
				open: 'animated bounceInLeft', // Animate.css class names
				close: 'animated bounceOutLeft' // Animate.css class names
			}
		}).show()
	})
	
	// ------------------------------------------------------- //
	// Center (Delay)
	// ------------------------------------------------------ //
	$('body').on('click', '#example-center-delay', function (e) {
		 new Noty({
			type: 'notification',
			layout: 'center',
			text: 'Hey this is an example notification.',
			progressBar: true,
			timeout: 2500,
			animation: {
				open: 'animated fadeIn', // Animate.css class names
				close: 'animated fadeOut' // Animate.css class names
			}
		}).show()
	})
	
	// ------------------------------------------------------- //
	// Bottom Right (Delay)
	// ------------------------------------------------------ //
	$('body').on('click', '#example-bottom-right-delay', function (e) {
		 new Noty({
			type: 'notification',
			layout: 'bottomRight',
			text: 'Hey this is an example notification.',
			progressBar: true,
			timeout: 2500,
			animation: {
				open: 'animated bounceInRight', // Animate.css class names
				close: 'animated bounceOutRight' // Animate.css class names
			}
		}).show()
	})
	
	// ------------------------------------------------------- //
	// Layouts (Default)
	// ------------------------------------------------------ //
	$('body').on('click', '#example-default', function (e) {
		 new Noty({
			type: 'notification',
			layout: 'topRight',
			text: 'Hey this is an default notification.',
			progressBar: true,
			timeout: 2500,
			animation: {
				open: 'animated bounceInRight', // Animate.css class names
				close: 'animated bounceOutRight' // Animate.css class names
			}
		}).show()
	})
	
	// ------------------------------------------------------- //
	// Layouts (Default)
	// ------------------------------------------------------ //
	$('body').on('click', '#example-success', function (e) {
		 new Noty({
			type: 'success',
			layout: 'topRight',
			text: 'Hey this is an success notification.',
			progressBar: true,
			timeout: 2500,
			animation: {
				open: 'animated bounceInRight', // Animate.css class names
				close: 'animated bounceOutRight' // Animate.css class names
			}
		}).show()
	})
	
	// ------------------------------------------------------- //
	// Layouts (Warning)
	// ------------------------------------------------------ //
	$('body').on('click', '#example-warning', function (e) {
		 new Noty({
			type: 'warning',
			layout: 'topRight',
			text: 'Hey this is an warning notification.',
			progressBar: true,
			timeout: 2500,
			animation: {
				open: 'animated bounceInRight', // Animate.css class names
				close: 'animated bounceOutRight' // Animate.css class names
			}
		}).show()
	})
	
	// ------------------------------------------------------- //
	// Layouts (Error)
	// ------------------------------------------------------ //
	$('body').on('click', '#example-error', function (e) {
		 new Noty({
			type: 'error',
			layout: 'topRight',
			text: 'Hey this is an error notification.',
			progressBar: true,
			timeout: 2500,
			animation: {
				open: 'animated bounceInRight', // Animate.css class names
				close: 'animated bounceOutRight' // Animate.css class names
			}
		}).show()
	})
	
	// ------------------------------------------------------- //
	// Layouts (Info)
	// ------------------------------------------------------ //
	$('body').on('click', '#example-info', function (e) {
		 new Noty({
			type: 'info',
			layout: 'topRight',
			text: 'Hey this is an informations notification.',
			progressBar: true,
			timeout: 2500,
			animation: {
				open: 'animated bounceInRight', // Animate.css class names
				close: 'animated bounceOutRight' // Animate.css class names
			}
		}).show()
	})

})(jQuery);