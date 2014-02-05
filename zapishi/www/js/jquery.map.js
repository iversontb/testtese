$( function(){
    ymaps.ready( initMap );


    function initMap(){

        var container = $('#map'),
            map = new ymaps.Map( 'map', {
                center: [container.attr('data-lat'), container.attr('data-long')],
                zoom: 17

        });
    }

});