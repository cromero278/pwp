$(document).ready(function(){

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

	/* begin validate function here */
	$("#contact-form").validate({

		debug:true,
		errorClass: "alert alert-danger",
		errorLabelContainer: "#output-area",
		errorElement: "div",

		rules: {
			name: {
			required: true,
			},
			email: {
				email: true,
				required: true,
			},
			text: {
				required: true,
				maxLength: 1000,
			},
			subject: {
				required: false,
				maxLength: 64,
			}
		},

		messages: {
			name: {
				required: "Please enter your name",
			},
			email: {
				email: "Please enter a valid email address",
				required: "Please enter a valid email address",
			},
			text: {
				required: "Please enter a message",
				maxLength: "Message 1000 characters max",
			}
		},

		submitHandler: function(form) {
			$("#contact-form").ajaxSubmit({
				type:"POST",
				url: $("#contact-form").attr("action"),

				success: function(ajaxOutput) {
					$("#output-area").css("display", "");

					$("#output-area").html(ajaxOutput);

					if($(".alert-success").length >= 1) {
						$("#contact-form")[0].reset();
					}
				}
			})
		}
		});
	});