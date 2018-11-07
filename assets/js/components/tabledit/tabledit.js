(function ($) {

	'use strict';

	// ------------------------------------------------------- //
	// Example 03
	// ------------------------------------------------------ //	
    $('#example1').Tabledit({
        url: '../assets/php/example.php',
        editButton: true,
        deleteButton: false,
        columns: {
            identifier: [0, 'id'],
            editable: [[1, 'firstname'], [2, 'lastname'], [3, 'mail'], [4, 'country']]
        },
	    buttons: {
	        edit: {
	            class: 'btn btn-sm btn-primary td-actions',
	            html: '<a href="#"><i class="la la-edit p-1 mr-0 text-white"></i></a>',
	            action: 'edit'
	        },
	        delete: {
	            class: 'btn btn-sm btn-danger td-actions',
	            html: '<a href="#"><i class="la la-close p-1 mr-0 text-white"></i></a>',
	            action: 'delete'
	        },
	        save: {
	            class: 'btn btn-success',
	            html: 'Save'
	        },
	        restore: {
	            class: 'btn btn-sm btn-warning',
	            html: 'Restore',
	            action: 'Restore'
	        },
	        confirm: {
	            class: 'btn btn-primary',
	            html: 'Confirm'
	        }
	    }
    });

	// ------------------------------------------------------- //
	// Example 02
	// ------------------------------------------------------ //	
    $('#example2').Tabledit({
        url: '../assets/php/example.php',
        editButton: false,
        deleteButton: false,
        hideIdentifier: false,
        columns: {
            identifier: [0, 'id'],
            editable: [[1, 'firstname'], [2, 'lastname'], [3, 'mail'], [4, 'country']]
        }
    });

	// ------------------------------------------------------- //
	// Example 03
	// ------------------------------------------------------ //	
    $('#example3').Tabledit({
        url: '../assets/php/example.php',
        eventType: 'dblclick',
        editButton: false,
        deleteButton: false,
        columns: {
            identifier: [0, 'id'],
            editable: [[1, 'firstname'], [2, 'lastname'], [3, 'mail'], [4, 'country']]
        }
    });

})(jQuery);