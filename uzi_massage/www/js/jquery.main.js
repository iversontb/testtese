$(function(){





		$("#coin-slider, #coin-slider1 , #coin-slider2").coinslider({	
			width: 740,
			height: 270,
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
		

	var params = {
		changedEl: ".bookingForm select"
	}
	cuSel(params);
		
	// инициализация календаря
	$( "#date1" ).datepicker();



    // подключение янедкс карт

    ymaps.ready(init);
    var myMap,
        myMap2,
        myMap3,
        myPlacemark,
        myPlacemark2,
        myPlacemark3;


    function init(){
        myMap = new ymaps.Map ("map", {
            center: [55.731576,37.621723],
            zoom: 15
        });
        myMap2 = new ymaps.Map ("map2", {
            center: [55.710297,37.731191],
            zoom: 15
        });
        myMap3 = new ymaps.Map ("map3", {
            center: [55.780198,37.640048],
            zoom: 17
        });
        myPlacemark = new ymaps.Placemark([55.731576,37.621723], {
            preset: 'twirl#greenIcon',
            hintContent: 'г. Москва м. Добрынинская ул. Большая Полянка д. 55, стр. 2'

        });
        myPlacemark2 = new ymaps.Placemark([55.710297,37.731191], {
            preset: 'twirl#greenIcon',
            hintContent: 'Медицинский центр у метро Текстильщики, Люблинская ул., д. 13'

        });
        myPlacemark3 = new ymaps.Placemark([55.780198,37.640048], {
            preset: 'twirl#greenIcon',
            hintContent: 'гМедицинский центр у метро Проспект Мира, Протопоповский пер., д. 25'

        });

        myMap.geoObjects.add(myPlacemark);
        myMap2.geoObjects.add(myPlacemark2);
        myMap3.geoObjects.add(myPlacemark3);




    }
		
	
});