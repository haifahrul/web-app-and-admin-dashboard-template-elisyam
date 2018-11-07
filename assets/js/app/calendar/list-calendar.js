(function ($) {

    'use strict';
	
    // ------------------------------------------------------- //
    // Calendar List View
    // ------------------------------------------------------ //
	$(function() {
		// page is ready
		$('#calendar').fullCalendar({
			// emphasizes business hours
			businessHours: true,
			defaultView: 'listWeek',
			// event dragging & resizing
			editable: true,
			// header
			header: {
				left: 'title',
				center: 'month,agendaWeek,agendaDay',
				right: 'today prev,next'
			},
			events: [
				{
					title: 'Barber',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
					start: '2018-06-05',
					end: '2018-06-05',
					className: 'fc-bg-default',
					icon : "scissors"
				}, 
				{
					title: 'Flight Paris',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
					start: '2018-06-08T14:00:00',
					end: '2018-06-08T20:00:00',
					className: 'fc-bg-violet',
					icon : "plane",
					allDay: false
				},
				{
					title: 'Team Meeting',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
					start: '2018-06-10T13:00:00',
					end: '2018-06-10T16:00:00',
					className: 'fc-bg-orange',
					icon : "group",
					allDay: false
				},
				{
					title: 'Meeting',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
					start: '2018-06-12',
					className: 'fc-bg-orange',
					icon : "suitcase"
				},
				{
					title: 'Conference',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
					start: '2018-06-13',
					end: '2018-06-15',
					className: 'fc-bg-violet',
					icon : "calendar"
				}, 
				{
					title: 'Baby Shower',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
					start: '2018-06-13T18:30:00',
					end: '2018-06-13T19:30:00',
					className: 'fc-bg-default',
					icon : "child"
				},
				{
					title: 'Birthday',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
					start: '2018-06-13T20:00:00',
					end: '2018-06-13T23:30:00',
					className: 'fc-bg-default',
					icon : "birthday-cake"
				}, 
				{
					title: 'Restaurant',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
					start: '2018-06-15T09:30:00',
					end: '2018-06-15T11:45:00',
					className: 'fc-bg-default',
					icon : "glass",
					allDay: false
				},
				{
					title: 'Dinner',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
					start: '2018-06-15T20:00:00',
					end: '2018-06-15T22:30:00',
					className: 'fc-bg-default',
					icon : "cutlery",
					allDay: false
				},
				{
					title: 'Shooting',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
					start: '2018-06-25',
					end: '2018-06-25',
					className: 'fc-bg-blue',
					icon : "camera"
				},
				{
					title: 'Go Space :)',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
					start: '2018-06-27',
					end: '2018-06-27',
					className: 'fc-bg-default',
					icon : "rocket"
				},
				{
					title: 'Dentist',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
					start: '2018-06-29T11:30:00',
					end: '2018-06-29T012:30:00',
					className: 'fc-bg-blue',
					icon : "medkit",
					allDay: false
				}
			],
			eventRender: function(event, element) {
				if(event.icon){          
					element.find(".fc-list-item-title").prepend("<i class='la la-"+event.icon+"'></i>");
				}
			  },
			eventClick:  function(event, jsEvent, view) {
			        $('.event-icon').html("<i class='la la-"+event.icon+"'></i>");
					$('.event-title').html(event.title);
					$('.event-body').html(event.description);
					$('.eventUrl').attr('href',event.url);
					$('#modal-view-event').modal();
			},
		})
	});
	
})(jQuery);