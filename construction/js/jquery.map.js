$( function(){
    ymaps.ready(init);
    var myMap;

    function init(){
        var container = $( '.map__wrap' );
        myMap = new ymaps.Map ("map", {
            center: [ parseFloat( container.attr( 'data-lat' ) ), parseFloat( container.attr( 'data-lang' ) )],
            zoom: parseInt( container.attr( 'data-zoom' ) )
        });

        var myPlacemark = new ymaps.Placemark([parseFloat( container.attr( 'data-lat' ) ), parseFloat( container.attr( 'data-lang' ) )], {
            balloonContent: $( '.map__wrap > ul > li' ).html()
        });

        myMap.geoObjects.add(myPlacemark);
        myPlacemark.balloon.open(myMap.getCenter());
    }
} );