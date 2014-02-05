$(function(){


    var maps = $( '.map' ),
        mapOptions = {
            center: new google.maps.LatLng(57.0442, 9.9116),
            zoom: 5,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
    var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

} );


