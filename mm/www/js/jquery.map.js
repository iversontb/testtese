$(function(){

    $(window).load( function(){
        initialize();
    });

    function initialize() {
        var mapOptions = {
            center: new google.maps.LatLng(55.798, 37.545),
            zoom: 17,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var image = new google.maps.MarkerImage('img/icon.png');
        var map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);



        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(55.798, 37.545),
            map: map,
            title: 'Hello World!',
            icon: image
        });


    }
//    ar maps = $( '.map' ),
//        mapOptions = {
//            center: new google.maps.LatLng( parseFloat( maps.attr( 'data-lat' ) ), parseFloat( maps.attr( 'data-lang' ) ) ),
//            zoom: 18,
//            scrollwheel: false,
//            mapTypeId: google.maps.MapTypeId.ROADMAP
//        };
//    var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
//
//    var image = new google.maps.MarkerImage('/netcat_template/template/2/img/map-icon.png',
//        new google.maps.Size(130, 91),
//        new google.maps.Point(0,0),
//        new google.maps.Point(16, 89));
//
//    var myLatLng = new google.maps.LatLng( parseFloat( maps.attr( 'data-lat' ) ), parseFloat( maps.attr( 'data-lang' ) ) );
//    var beachMarker = new google.maps.Marker({
//        position: myLatLng,
//        map: map,
//        icon: image
//    });

});