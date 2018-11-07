(function ($) {

    'use strict';
	
    // ------------------------------------------------------- //
    // Calendar External Event
    // ------------------------------------------------------ //
	$(function () {

		// initialize the external events
		// -----------------------------------------------------------------

		$('#external-events .fc-event').each(function () {

			// store data so the calendar knows to render an event upon drop
			$(this).data('event', {
				title: $.trim($(this).text()), // use the element's text as the event title
				stick: true // maintain when user navigates (see docs on the renderEvent method)
			});

			// make the event draggable using jQuery UI
			$(this).draggable({
				zIndex: 999,
				revert: true, // will cause the event to go back to its
				revertDuration: 0 //  original position after the drag
			});

		});

		// initialize the calendar
		// -----------------------------------------------------------------

		$('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			editable: true,
			droppable: true, // this allows things to be dropped onto the calendar
			drop: function () {
				// is the "remove after drop" checkbox checked?
				if ($('#drop-remove').is(':checked')) {
					// if so, remove the element from the "Draggable Events" list
					$(this).remove();
				}
			},
			events: [{
					title: 'Barber',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
					start: '2018-06-05',
					end: '2018-06-05',
					className: 'fc-bg-default',
					icon: "scissors"
				},
				{
					title: 'Flight Paris',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
					start: '2018-06-08T14:00:00',
					end: '2018-06-08T20:00:00',
					className: 'fc-bg-violet',
					icon: "plane",
					allDay: false
				},
				{
					title: 'Team Meeting',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
					start: '2018-06-10T13:00:00',
					end: '2018-06-10T16:00:00',
					className: 'fc-bg-orange',
					icon: "group",
					allDay: false
				},
				{
					title: 'Meeting',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
					start: '2018-06-12',
					className: 'fc-bg-orange',
					icon: "suitcase"
				},
				{
					title: 'Baby Shower',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
					start: '2018-06-13',
					end: '2018-06-14',
					className: 'fc-bg-default',
					icon: "child"
				},
				{
					title: 'Birthday',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
					start: '2018-06-13',
					end: '2018-06-14',
					className: 'fc-bg-default',
					icon: "birthday-cake"
				},
				{
					title: 'Restaurant',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
					start: '2018-06-15T09:30:00',
					end: '2018-06-15T11:45:00',
					className: 'fc-bg-default',
					icon: "glass",
					allDay: false
				}
			],
			eventRender: function (event, element) {
				if (event.icon) {
					element.find(".fc-title").prepend("<i class='la la-" + event.icon + "'></i>");
				}
			},
			eventClick: function (event, jsEvent, view) {
				$('.event-icon').html("<i class='la la-" + event.icon + "'></i>");
				$('.event-title').html(event.title);
				$('.event-body').html(event.description);
				$('.eventUrl').attr('href', event.url);
				$('#modal-view-event').modal();
			},
		});
	});	
})(jQuery);