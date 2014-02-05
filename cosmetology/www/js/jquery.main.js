$(function(){

	$( '.asideMenu > ol > li > span, .asideMenu > ol > li > ul > li > span, .asideMenu > ol > li > ul > li > ul > li > span' ).click( function(){
		if ( $( this ).next().css( 'display' )=="none" ){
			$( this ).next().slideDown();
			$( this ).parent().addClass( 'active' );
		}
		else{
			$( this ).next().slideUp();
			$( this ).parent().removeClass( 'active' );
		}
	});
	
	jQuery("#coin-slider, #coin-slider1 , #coin-slider2").coinslider({	
		width: 498,
		height: 282,
		spw: 1,
		sph: 1,
		delay: 5000
	});
	
	$( '.gallMenu a' ).click(function(){
		$( '.gallMenu a' ).removeClass('active');
		$(this).addClass('active');
		var _id = $( this ).attr( 'id' ),
				_this=$( '.gallWrap ' ).eq(_id);

		$( '.gallWrap' ).css({ 'display': 'none' });
		
		_this.fadeIn();
		
		return false;
	});		
	
	// подключение янедкс карт	
	
	ymaps.ready(init);
	var myMap, 
			myPlacemark;


	function init(){ 
			myMap = new ymaps.Map ("map", {
					center: [55.731576,37.621723],
					zoom: 15
			}); 
			myPlacemark = new ymaps.Placemark([55.731576,37.621723], {
				preset: 'twirl#greenIcon',
				hintContent: 'г. Москва м. Добрынинская ул. Большая Полянка д. 55, стр. 2',

		 });
	
		 myMap.geoObjects.add(myPlacemark);
			

			
	}
	
	
	
	
	
	
});