$(document).ready (function(){
	ymaps.ready(init);
	function init () {
		var myMap = new ymaps.Map('map', {
				center: [55.104912, 38.759614], 
				zoom: 15,
				type: 'yandex#hybrid'
			});
		
		myMap.controls.add("mapTools").add("zoomControl", { top: 50, left: 7 }).add(new ymaps.control.TypeSelector(["yandex#hybrid", "yandex#map", "yandex#satellite"]));
		
		var myPlacemark = new ymaps.Placemark(		
		[55.107773, 38.766626], {
		balloonContent: '<b>40-й Меридиан Арбат</b> <br />Отель<br />Коломна, Водовозный пер., 12',
		}, {   
		iconImageHref: '/img/pin5.png',
		iconImageSize: [34, 39],
		iconImageOffset: [-17, -39],		
		});
		myMap.geoObjects.add(myPlacemark);	
		
		var myPlacemark2 = new ymaps.Placemark(		
		[55.101975, 38.758413], {
		balloonContent: '<b>Добрый торт</b> <br />Кафе-кондитерская<br />Коломна, ул. Зайцева, 13',
		}, {   
		iconImageHref: '/img/pin1.png',
		iconImageSize: [34, 39],
		iconImageOffset: [-17, -39],		
		});
		myMap.geoObjects.add(myPlacemark2);
		
		var myPlacemark3 = new ymaps.Placemark(		
		[55.103584, 38.754733], {
		balloonContent: '<b>Намеки</b> <br />Арт-кафе<br />Коломна, ул. Лажечникова, 5',
		}, {   
		iconImageHref: '/img/pin1.png',
		iconImageSize: [34, 39],
		iconImageOffset: [-17, -39],		
		});
		myMap.geoObjects.add(myPlacemark3);
		
		var myPlacemark4 = new ymaps.Placemark(		
		[55.103414, 38.754717], {
		balloonContent: '<b>Яръ</b> <br />Кафе<br />Коломна, ул. Лажечникова,3',
		}, {   
		iconImageHref: '/img/pin1.png',
		iconImageSize: [34, 39],
		iconImageOffset: [-17, -39],		
		});
		myMap.geoObjects.add(myPlacemark4);
		
		var myPlacemark5 = new ymaps.Placemark(		
		[55.096497, 38.763144], {
		balloonContent: '<b>McDonalds</b> <br />Кафе<br />Коломна, ул. Октябрьской Революции, 246',
		}, {   
		iconImageHref: '/img/pin1.png',
		iconImageSize: [34, 39],
		iconImageOffset: [-17, -39],		
		});
		myMap.geoObjects.add(myPlacemark5);
		
		var myPlacemark6 = new ymaps.Placemark(		
		[55.094771, 38.765585], {
		balloonContent: '<b>Сity-кафе</b> <br />Кафе<br />Коломна, Советская пл., 2',
		}, {   
		iconImageHref: '/img/pin1.png',
		iconImageSize: [34, 39],
		iconImageOffset: [-17, -39],		
		});
		myMap.geoObjects.add(myPlacemark6);
		
		var myPlacemark7 = new ymaps.Placemark(		
		[55.091906, 38.766551], {
		balloonContent: '<b>BBQ</b> <br />Стейк-хаус<br />Коломна, ул. Коломенская, д.2',
		}, {   
		iconImageHref: '/img/pin1.png',
		iconImageSize: [34, 39],
		iconImageOffset: [-17, -39],		
		});
		myMap.geoObjects.add(myPlacemark7);
		
		var myPlacemark8 = new ymaps.Placemark(		
		[55.084017, 38.777446], {
		balloonContent: '<b>Монти</b> <br />Кафе<br />Коломна, ул. Ленина, 69',
		}, {   
		iconImageHref: '/img/pin1.png',
		iconImageSize: [34, 39],
		iconImageOffset: [-17, -39],		
		});
		myMap.geoObjects.add(myPlacemark8);
		
		var myPlacemark9 = new ymaps.Placemark(		
		[55.083389, 38.801393], {
		balloonContent: '<b>TOT PUB</b> <br />Гастропаб<br />Коломна, ул. Октябрьской Революции, 366, стр. 2',
		}, {   
		iconImageHref: '/img/pin1.png',
		iconImageSize: [34, 39],
		iconImageOffset: [-17, -39],		
		});
		myMap.geoObjects.add(myPlacemark9);
		
		var myPlacemark10 = new ymaps.Placemark(		
		[55.107742, 38.766921], {
		balloonContent: '<b>40-й Меридиан Арбат</b> <br />Ресторан<br />Коломна, Водовозный пер., 12',
		}, {   
		iconImageHref: '/img/pin1.png',
		iconImageSize: [34, 39],
		iconImageOffset: [-17, -39],		
		});
		myMap.geoObjects.add(myPlacemark10);
		
		var myPlacemark11 = new ymaps.Placemark(		
		[55.102189, 38.770308], {
		balloonContent: '<b>Музейная Фабрика пастилы</b> <br />Музей<br />Коломна, ул. Полянская, 4',
		}, {   
		iconImageHref: '/img/pin2.png',
		iconImageSize: [34, 39],
		iconImageOffset: [-17, -39],		
		});
		myMap.geoObjects.add(myPlacemark11);
		
		var myPlacemark12 = new ymaps.Placemark(		
		[55.100946, 38.756575], {
		balloonContent: '<b>Арткоммуналка. Ерофеев и Другие</b> <br />Музей<br />Коломна ул.Октябрьской революции, 205',
		}, {   
		iconImageHref: '/img/pin2.png',
		iconImageSize: [34, 39],
		iconImageOffset: [-17, -39],		
		});
		myMap.geoObjects.add(myPlacemark12);
		
		var myPlacemark13 = new ymaps.Placemark(		
		[55.104672, 38.770228], {
		balloonContent: '<b>Коломенская пастила</b> <br />Музей исчезнувшего вкуса<br />Коломна, ул. Посадская, 13а',
		}, {   
		iconImageHref: '/img/pin2.png',
		iconImageSize: [34, 39],
		iconImageOffset: [-17, -39],		
		});
		myMap.geoObjects.add(myPlacemark13);
		
		var myPlacemark14 = new ymaps.Placemark(		
		[55.105805, 38.763717], {
		balloonContent: '<b>Калачная</b> <br />Музей<br />Коломна, ул. Зайцева, 14',
		}, {   
		iconImageHref: '/img/pin2.png',
		iconImageSize: [34, 39],
		iconImageOffset: [-17, -39],		
		});
		myMap.geoObjects.add(myPlacemark14);
		
		var myPlacemark15 = new ymaps.Placemark(		
		[55.101514, 38.754247], {
		balloonContent: '<b>Усадьба купцов Лажечниковых</b> <br />Музей<br />Коломна, ул. Октябрьской Революции, 194',
		}, {   
		iconImageHref: '/img/pin2.png',
		iconImageSize: [34, 39],
		iconImageOffset: [-17, -39],		
		});
		myMap.geoObjects.add(myPlacemark15);
		
		var myPlacemark16 = new ymaps.Placemark(		
		[55.105161, 38.754822], {
		balloonContent: '<b>Краеведческий музей</b> <br />Музей<br />Коломна, ул. Лажечникова, 15а',
		}, {   
		iconImageHref: '/img/pin2.png',
		iconImageSize: [34, 39],
		iconImageOffset: [-17, -39],		
		});
		myMap.geoObjects.add(myPlacemark16);
		
		var myPlacemark17 = new ymaps.Placemark(		
		[55.119181, 38.76022], {
		balloonContent: '<b>Богородице-Рождественский Бобренев монастырь</b> <br />с. Старое Бобренево',
		}, {   
		iconImageHref: '/img/pin3.png',
		iconImageSize: [34, 39],
		iconImageOffset: [-17, -39],		
		});
		myMap.geoObjects.add(myPlacemark17);
		
		var myPlacemark18 = new ymaps.Placemark(		
		[55.105568, 38.758433], {
		balloonContent: '<b>Успенский кафедральный собор</b> <br />Коломна, ул. Лазарева, д. 14',
		}, {   
		iconImageHref: '/img/pin3.png',
		iconImageSize: [34, 39],
		iconImageOffset: [-17, -39],		
		});
		myMap.geoObjects.add(myPlacemark18);
		
		var myPlacemark19 = new ymaps.Placemark(		
		[55.103327, 38.754211], {
		balloonContent: '<b>Успенский Брусенский женский монастырь</b> <br />г. Коломна, ул. Лажечникова, д. 10',
		}, {   
		iconImageHref: '/img/pin3.png',
		iconImageSize: [34, 39],
		iconImageOffset: [-17, -39],		
		});
		myMap.geoObjects.add(myPlacemark19);
		
		var myPlacemark20 = new ymaps.Placemark(		
		[55.104445, 38.772554], {
		balloonContent: '<b>Церковь Рождества Христова</b> <br />г. Коломна, Посадский пер., д. 4',
		}, {   
		iconImageHref: '/img/pin3.png',
		iconImageSize: [34, 39],
		iconImageOffset: [-17, -39],		
		});
		myMap.geoObjects.add(myPlacemark20);
		
		var myPlacemark21 = new ymaps.Placemark(		
		[55.105722, 38.760346], {
		balloonContent: '<b>Церковь Обновления Храма Воскресения Христова</b> <br />г. Коломна, ул. Лазарева, д. 18',
		}, {   
		iconImageHref: '/img/pin3.png',
		iconImageSize: [34, 39],
		iconImageOffset: [-17, -39],		
		});
		myMap.geoObjects.add(myPlacemark21);
		
		var myPlacemark22 = new ymaps.Placemark(		
		[55.103126, 38.749683], {
		balloonContent: '<b>Церковь Архангела Михаила</b> <br />г. Коломна, ул. Гражданская, д. 71',
		}, {   
		iconImageHref: '/img/pin3.png',
		iconImageSize: [34, 39],
		iconImageOffset: [-17, -39],		
		});
		myMap.geoObjects.add(myPlacemark22);
		
		var myPlacemark23 = new ymaps.Placemark(		
		[55.105805, 38.757848], {
		balloonContent: '<b>Церковь Тихвинской Иконы Божией Матери</b>',
		}, {   
		iconImageHref: '/img/pin3.png',
		iconImageSize: [34, 39],
		iconImageOffset: [-17, -39],		
		});
		myMap.geoObjects.add(myPlacemark23);
		
		var myPlacemark24 = new ymaps.Placemark(		
		[55.10581, 38.773794], {
		balloonContent: '<b>Церковь Великомученика Никиты</b><br />г. Коломна, ул. Посадская, д. 32',
		}, {   
		iconImageHref: '/img/pin3.png',
		iconImageSize: [34, 39],
		iconImageOffset: [-17, -39],		
		});
		myMap.geoObjects.add(myPlacemark24);
		
		var myPlacemark25 = new ymaps.Placemark(		
		[55.105733, 38.759843], {
		balloonContent: '<b>Церковь Святителя Николая Чудотворца</b><br />г. Коломна, ул. Лазарева, д. 16',
		}, {   
		iconImageHref: '/img/pin3.png',
		iconImageSize: [34, 39],
		iconImageOffset: [-17, -39],		
		});
		myMap.geoObjects.add(myPlacemark25);
		
		var myPlacemark26 = new ymaps.Placemark(		
		[55.105788, 38.76201], {
		balloonContent: '<b>Церковь Воздвижения Креста Господня</b>',
		}, {   
		iconImageHref: '/img/pin3.png',
		iconImageSize: [34, 39],
		iconImageOffset: [-17, -39],		
		});
		myMap.geoObjects.add(myPlacemark26);
		
		var myPlacemark27 = new ymaps.Placemark(		
		[55.106145, 38.758395], {
		balloonContent: '<b>Храм Воскресения Словущего</b>',
		}, {   
		iconImageHref: '/img/pin3.png',
		iconImageSize: [34, 39],
		iconImageOffset: [-17, -39],		
		});
		myMap.geoObjects.add(myPlacemark27);
		
		var myPlacemark28 = new ymaps.Placemark(		
		[55.10598, 38.772051], {
		balloonContent: '<b>Дом воеводы</b><br />г. Коломна, Посадский пер., 13',
		}, {   
		iconImageHref: '/img/pin4.png',
		iconImageSize: [34, 39],
		iconImageOffset: [-17, -39],		
		});
		myMap.geoObjects.add(myPlacemark28);
		
		var myPlacemark29 = new ymaps.Placemark(		
		[55.10598, 38.772051], {
		balloonContent: '<b>Дом воеводы</b><br />г. Коломна, Посадский пер., 13',
		}, {   
		iconImageHref: '/img/pin4.png',
		iconImageSize: [34, 39],
		iconImageOffset: [-17, -39],		
		});
		myMap.geoObjects.add(myPlacemark29);
		
		var myPlacemark30 = new ymaps.Placemark(		
		[55.10446, 38.751004], {
		balloonContent: '<b>Маринкина Башня</b>',
		}, {   
		iconImageHref: '/img/pin4.png',
		iconImageSize: [34, 39],
		iconImageOffset: [-17, -39],		
		});
		myMap.geoObjects.add(myPlacemark30);
		
		var myPlacemark31 = new ymaps.Placemark(		
		[55.101648, 38.760113], {
		balloonContent: '<b>Дом Озерова</b><br />Коломна, Красногвардейская ул., 2',
		}, {   
		iconImageHref: '/img/pin4.png',
		iconImageSize: [34, 39],
		iconImageOffset: [-17, -39],		
		});
		myMap.geoObjects.add(myPlacemark31);
		
		var myPlacemark32 = new ymaps.Placemark(		
		[55.104342, 38.754166], {
		balloonContent: '<b>Дом настоятельницы Брусенского монастыря</b><br />Коломна Ул. Лажечникова, 12',
		}, {   
		iconImageHref: '/img/pin4.png',
		iconImageSize: [34, 39],
		iconImageOffset: [-17, -39],		
		});
		myMap.geoObjects.add(myPlacemark32);
		
		var myPlacemark33 = new ymaps.Placemark(		
		[55.103971, 38.754777], {
		balloonContent: '<b>Здание городской думы</b><br />Коломна, Лажечникова ул., 7',
		}, {   
		iconImageHref: '/img/pin4.png',
		iconImageSize: [34, 39],
		iconImageOffset: [-17, -39],		
		});
		myMap.geoObjects.add(myPlacemark33);
		
		var myPlacemark34 = new ymaps.Placemark(		
		[55.105786, 38.763338], {
		balloonContent: '<b>Пятницкие ворота</b>',
		}, {   
		iconImageHref: '/img/pin4.png',
		iconImageSize: [34, 39],
		iconImageOffset: [-17, -39],		
		});
		myMap.geoObjects.add(myPlacemark34);
		
		var myPlacemark35 = new ymaps.Placemark(		
		[55.105786, 38.763338], {
		balloonContent: '<b>Пятницкие ворота</b>',
		}, {   
		iconImageHref: '/img/pin4.png',
		iconImageSize: [34, 39],
		iconImageOffset: [-17, -39],		
		});
		myMap.geoObjects.add(myPlacemark35);
		
		var myPlacemark36 = new ymaps.Placemark(		
		[55.103131, 38.752148], {
		balloonContent: '<b>Грановитая башня</b>',
		}, {   
		iconImageHref: '/img/pin4.png',
		iconImageSize: [34, 39],
		iconImageOffset: [-17, -39],		
		});
		myMap.geoObjects.add(myPlacemark36);
		
		var myPlacemark37 = new ymaps.Placemark(		
		[55.103971, 38.754777], {
		balloonContent: '<b>Памятник князю Дмитрию Донскому</b>',
		}, {   
		iconImageHref: '/img/pin4.png',
		iconImageSize: [34, 39],
		iconImageOffset: [-17, -39],		
		});
		myMap.geoObjects.add(myPlacemark37);
		
		var myPlacemark38 = new ymaps.Placemark(		
		[55.105758, 38.757276], {
		balloonContent: '<b>Памятник святым равноапостольным Кириллу и Мефодию</b>',
		}, {   
		iconImageHref: '/img/pin4.png',
		iconImageSize: [34, 39],
		iconImageOffset: [-17, -39],		
		});
		myMap.geoObjects.add(myPlacemark38);
		
		var myPlacemark39 = new ymaps.Placemark(		
		[55.105568, 38.75616], {
		balloonContent: '<b>Дом Куприна</b><br />Коломна, Ул.Лазарева, 10',
		}, {   
		iconImageHref: '/img/pin4.png',
		iconImageSize: [34, 39],
		iconImageOffset: [-17, -39],		
		});
		myMap.geoObjects.add(myPlacemark39);
		
		var myPlacemark40 = new ymaps.Placemark(		
		[55.106531, 38.758945], {
		balloonContent: '<b>Народное училище</b><br />Коломна, Кремлевская ул., 18',
		}, {   
		iconImageHref: '/img/pin4.png',
		iconImageSize: [34, 39],
		iconImageOffset: [-17, -39],		
		});
		myMap.geoObjects.add(myPlacemark40);		
	}
})