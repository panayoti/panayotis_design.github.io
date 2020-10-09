jQuery(function($) {

	//#main-slider2
	$(function(){
		$('#main-slider2.carousel').carousel({
			interval: 8000
		});
	});

	$( '.centered' ).each(function( e ) {
		$(this).css('margin-top',  ($('#main-slider2').height() - $(this).height())/2);
	});

	$(window).resize(function(){
		$( '.centered' ).each(function( e ) {
			$(this).css('margin-top',  ($('#main-slider2').height() - $(this).height())/2);
		});
	});
});