$( window ).load( function(){
    new Map( $( '.address__map' ) );
} );
var Map = function( obj ){
    this.obj = obj;

    this.init();
};
Map.prototype = {
    init: function(){
        var self = this;

        self.core = self.core();
        self.core.build();
    },
    core: function(){
        var self = this,
            elems = self.elems;

        return {
            build: function(){
                var windW = $( '.site' ).width();

                self.obj.css( {
                    width: windW,
                    marginLeft: -( windW - 1000 ) / 2
                } );
                self.lat = self.obj.attr( 'data-lat' );
                self.lang = self.obj.attr( 'data-lang' );

                ymaps.ready( initMap );

                function initMap(){
                    self.map =  new ymaps.Map ( 'map', {
                        center: [ self.lat, self.lang ],
                        zoom: 17
                    } );

                    self.myPlacemark = new ymaps.Placemark( [ self.lat, self.lang ] );
                    self.map.geoObjects.add( self.myPlacemark );

                    self.core.controls();
                }
            },
            controls: function(){
                $( window ).on( {
                    'resize': function(){
                        var windW = $( '.site' ).width();

                        self.obj.css( {
                            width: windW,
                            marginLeft: -( windW - 1000 ) / 2
                        } );
                    }
                } );
                $( '.address__print' ).on( {
                    'click': function(){
                        console.log(1);
                        window.print();
                        return false;
                    }
                } );
            }
        };
    }
};
