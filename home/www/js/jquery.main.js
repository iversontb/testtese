$(function(){

	// удаление из карзины
	$( ' .delete ' ).click(function () {
		$( this ).parent().parent().remove();
	});

	// выподающее меню
	$( ' .asideMenu > ol > li > span, .asideMenu > ol > li > ul > li > span ' ).click(function () {
		if ( $( this ).next().css( 'display' )== 'none' ){
			$( this ).next().slideDown(300);
		}
		else { $( this ).next().slideUp(300);}
	});	
		
	// инициализация галереи на главной	
	$( ' #coin-slider ' ).coinslider({
		
		width: 699,
		height: 298,
		opacity: 1,
		navigation: true,
		delay: 5000
	
	});
	
	// инициализация Cusel
	var params = {
		changedEl: ".selectWrap select",
		scrollArrows: true
	}
	cuSel(params);
	

	$(function(){
	    $( '.gallery' ).jCarouselLite({
			btnNext: ".next",
			btnPrev: ".prev"
		});
	});



	
	// инициализация маленькой галереи
	loadLightBox( $( '.miniGallWrap .preview li a' ).eq(0)  );
		
	$( '.miniGallWrap .preview' ).on( 'click', 'li a', function() {
		loadLightBox( $( this ) );
		return false;
	} );


		
});


// загрузка лайтбокс
var loadLightBox = function(obj){

		var srcAttr = obj.children().attr('src'),
				hrefAttr = obj.attr('href');

		$( '.imgBigWrap a' ).remove();
		$( '.imgBigWrap' ).append( '<a href="'+ hrefAttr +'"><img src="'+ srcAttr +'"  height="251" width="352" alt=""></a>' );

		$( '.imgBigWrap a' ).lightBox( {
			txtImage: 'Изображение',
			txtOf: 'из'
		 } );	
		
};