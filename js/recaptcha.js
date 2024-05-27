$(function () {

	var loader = '<div class="preloader-wrapper small active"><div class="spinner-layer"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div>';

	$('input[type="hidden"].recaptcha').each(function () {

		var recaptcha = $(this), submitted = false;
		recaptcha.closest('form').bind('submit.recaptcha', function(e) {

			e.preventDefault();

			if( submitted ) return;
			submitted = true;

			$(this).find('[type="submit"]').attr('disabled', true).html("<span>Envoi en cours</span>" + loader);
	
			var form = $(this);
			grecaptcha.ready(function () {
				grecaptcha.execute(recaptcha.data('sitekey'), { action: recaptcha.data('action') }).then(function (token) {
					recaptcha.val(token);
					form.unbind('submit.recaptcha').submit();
				});
			});
	
		});	
		
	});

});