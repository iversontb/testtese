$( window ).load(function(){
    var slider = $( '.ares-slider_item' );

    slider.each( function(){
        new AresSlider2( $( this ) );
    } );

} );
var AresSlider2 = function( obj ){
    this.obj = obj;
    this.speed = 500;
    this.duration = 3000;

    this.init();
};
AresSlider2.prototype = {
    init: function(){
        var self = this;

        self.core = self.core();
        self.core.build();
    },
    core: function(){
        var self = this;

        return {
            build: function(){
                self.tl = new TimelineMax( { paused: true } );

                self.tl.insert( TweenMax.fromTo( self.obj.find( '.ares-slider_block' ), self.speed/1000,{
                    transformPerspective:500,
                    transformOrigin:"center center",
                    rotationY: 0
                }, {
                    rotationY: 180
                } ), 0 );
                self.tl.insert( TweenMax.fromTo( self.obj.find( '.back' ), self.speed/1000,{
                    transformPerspective:500,
                    transformOrigin:"center center",
                    rotationY: -180
                }, {
                    rotationY: 0
                } ), 0 );

                self.core.controls();
            },
            controls: function(){
                self.obj.on( {
                    'mouseover': function(){
                        self.tl.play();
                    },
                    'mouseleave': function(){
                        self.tl.reverse();
                    }
                } );
            }
        };
    }
};
