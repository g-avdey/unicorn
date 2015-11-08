$(document).ready(function(){
	var touch = $('.menu_button');
	var menu = $('.menu');

	$(touch).on('click',function(e){
		e.preventDefault();
		menu.slideToggle();
	});

	$(window).resize(function(){
		var wid = $(window).width();
		if (wid > 560 && menu.is('hidden')){
			menu.removeAttr('style')
		}
	});
});