$(function(){
    function mycarousel_initCallback(carousel) {
        // Disable autoscrolling if the user clicks the prev or next button.
        carousel.buttonNext.bind('click', function() {
            carousel.stopAuto();
            //todo тут можно ставить на паузу: там через 30 секунд включить авто скролл
            // пауза
            // carousel.startAuto();
        });
        carousel.buttonPrev.bind('click', function() {
            carousel.stopAuto();
        });
        // Pause autoscrolling if the user moves with the cursor over the clip.
        carousel.clip.hover(function() {
            carousel.stopAuto();
        }, function() {
            carousel.startAuto();
        });
    }

        $('#mycarousel').jcarousel({
            scroll : 1,
            visible : 4,
            wrap : 'circular',
            initCallback: mycarousel_initCallback
        });
    new Paralax( $( '.paralax__1' ), 0.4 );
    new Paralax( $( '.paralax__2' ), 0.65 );
    new Paralax( $( '.paralax__3' ), 0.8 );
} );

var Paralax = function( obj, speed ){
    this.obj = obj;
    this.speed = speed;
    this.window = $( window );

    this.init();
};
Paralax.prototype = {
    init: function(){
        var self = this;

        self.core = self.core();
        self.core.controls();
    },
    core: function(){
        var self = this;

        return {
            controls: function(){
                self.window.on( {
                    'scroll': function(){
                        var curScroll = self.window.scrollTop();

                        self.obj.css( { top: -self.window.scrollTop() * self.speed  } );
                    }
                } );
            }
        };
    }
};