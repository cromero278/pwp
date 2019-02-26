$(document).ready(function() {
	/**
	 * jQuery Validate Function
	 *
	 * This function provides front-end validation for your form.
	 * If all tests set up here pass, the form data is AJAX submitted
	 * to the mailer.php file.
	 *
	 * Update this file as needed for your form.
	 * All ids and name values must match up to your form here.
	 *
	 * @author Rochelle Lewis <rlewis37@cnm.edu>
	 **/

	$("#contact-form").validate(
		{
			debug: true,
			errorClass: "alert alert-danger",
			errorLabelContainer: "#output-area",
			errorElement: "div",
			// rules here define what is good or bad input
			// each rule starts with the form input element's NAME attribute
			rules: {
			name: {
			required: true
			},
			email: {
				email: true,
				required: true
			},
			text: {
				required: true,
				maxlength: 2000,
				minlength: 8
			},
			subject: {
				required: false,
				maxlength: 64
			}
		},

		messages: {
			name: {
				required: "Please enter your name",
			},
			email: {
				email: "Please enter a valid email address",
				required: "Please enter a valid email address"
			},
			text: {
				required: "Please enter a message",
				maxlength: "Message is too long, 2000 characters max",
				minlength: "Message is too short"
			},
			subject: {
				maxLength: "Subject too long"
			}
		},
			submitHandler: function(form) {
				$("#contact-form").ajaxSubmit({
					type: "POST",
					url:$("#contact-form").attr("action"),
					success: function(ajaxOutput) {
						// clear the output area's formatting
						$("#output-area").css("display","");

						// write the server's reply to the output area
						$("#output-area").html(ajaxOutput);

						// reset the form if it was successful
						if($(".alert-success").length >= 1) {
							$("#contact-form")[0].reset();
						}
					}
				})

			}


		});

});