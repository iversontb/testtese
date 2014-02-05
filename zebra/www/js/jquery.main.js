$(function(){
		
	// работа высплвающего бокового меню
	$( '.asideMenu  li' ).hover(
		function () {
			$( this ).children().next().css({ 'display' : 'block' });
		},
		function () {
			$( this ).children().next().css({ 'display' : 'none' });
		}
	);
	
	// инициализация галереии
	$( '#coin-slider' ).coinslider({	
		width: 676,
		height: 229,
		spw: 5,
		sph: 4,
		delay: 5000
	});

	// инициализация галереии
	$(function(){
	$( '.gallery' ).jCarouselLite({
			btnNext: ".next",
			btnPrev: ".prev",
			visible: 4
		});
	});

	// инициализация sucel
	$(document).ready(function(){
	var params = {
			changedEl: ".orderForm select"

			
		}
		cuSel(params);
	});

	// инициализация sucel
	$(document).ready(function(){
	var params = {
			changedEl: ".sortWrap select"
			
		}
		cuSel(params);
	});	

	$( '.enterButton' ).click( function(){
		$( this ).next().fadeIn();
	});
	
	
	$( '.closeButton' ).click( function(){
		$( '.popUp' ).fadeOut();
	});	
		
	
});