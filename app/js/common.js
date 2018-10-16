$(document).ready(function() {

	var touch = $('#touch-menu');
	var nav = $('.navbar');

	$(touch).on('click', function(e){
		e.preventDefault();
		nav.slideToggle();
	});
	$(window).resize(function(){
		var wid = $(window).width();
		if(wid > 1024 && nav.is(':hidden')){
			nav.removeAttr('style');

		}
	});


	$('.dropdown_nav').click(function(){
		$('.sub_nav').toggle();
	});
	
	$('.slider').slick({
		arrows: false,
		autoplay: true
	});
	
		//E-mail Ajax Send
	$("form.contactForm").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				$(th).find('.success').removeClass('active').fadeIn();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

});
