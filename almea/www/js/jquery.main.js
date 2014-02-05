$(function(){


	// положение выпадающего меню
	$( '.mainMenu ol > li' ).each( function(){
	 	var menuWidth = $( this ).width()/2;
		$( '.mainMenu li ul' ).css({ 'left' : menuWidth })
	});

	
	// выподающее меню
	$( '.mainMenu ol > li' ).hover(
	function () {
		$( '.mainMenu ol > li' ).children().next().css({ 'display' : 'none'});
		$( this ).children().next().stop().slideDown(300);
		},
		function () {
			$( this ).children().next().css({ 'display' : 'none'});
		}
 	);
/*	$( '.mainMenu ol > li' ).hover(
		function () {
			var elem = $( this ).children().next();
			$( '.mainMenu ol > li' ).children().next().css({ 'display' : 'none'});
			setTimeout(function() {
				elem.stop().slideDown(300);
			}, 1000);
		},
		function () {
			var elem = $( this ).children().next();
			setTimeout(function() {
				elem.stop().css({ 'display' : 'none'});
				
			}, 1000);
		}
   );*/
	 
	 // инициализация галереи на главной
		$( '.gallery' ).jCarouselLite({
			btnNext: ".next",
			btnPrev: ".prev",
			visible: 4
		});

		// действия при нажатии на чекбокс
		$( '.checkBox input' ).change( function(){
			if( $( '#myradio3' ).attr('checked')=='checked'){
					$( '.postInd' ).removeClass( 'desabled' );
					$( '.postInd' ).children().removeAttr( 'disabled' );
			}
			else{
					$( '.postInd' ).addClass( 'desabled' );
					$( '.postInd' ).children().attr(	'disabled','disabled' );		
					$( '.postInd' ).children().val('');		
			}
		});

		// работа табов
		$( '.contentMenu a' ).click(function(){
			$( '.contentMenu li' ).removeClass('active');
			$(this).parent().addClass('active');
			var _id = $( this ).attr( 'id' ),
					_this=$( '.imgList ' ).eq(_id);
	
			$( '.imgList' ).css({ 'display': 'none' });
			
			_this.fadeIn();
			
			return false;
		});		
		
	
});