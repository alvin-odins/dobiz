$(document).ready(function() {
	// Box product effects.
	$('.box-product > div').hover(function () {
		$(this).parent().children().not(this).stop().fadeTo('slow', '0.6');
		$(this).addClass('product-hover').find('.rating').stop().toggle().parent().find('.hover-actions').stop().toggle();
	}, function () {
		$(this).parent().children().not(this).stop().fadeTo('slow', '1.0');
		$(this).removeClass('product-hover').find('.hover-actions').stop().toggle().parent().find('.rating').stop().toggle();
	});

	// Category page product effects.
	$('.product-list > div, .product-grid > div').hover(function () {
		$(this).parent().children().not(this).stop().fadeTo('slow', '0.6');
		$(this).addClass('product-hover').stop().fadeTo('slow', '1.6');
	}, function () {
		$(this).parent().children().not(this).stop().fadeTo('slow', '1.0');
		$(this).removeClass('product-hover').stop();
	});

	$('#menu > ul > li').bind('mouseenter', function () {
		$(this).addClass('menuhover').children('div').css('display', 'table');
	});

	$('#menu > ul > li').bind('mouseleave', function () {
		$(this).removeClass('menuhover').children('div').css('display', 'none');
	});

	$('.button').button();
});