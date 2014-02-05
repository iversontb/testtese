$(function(){
    var slider = $( '.slides' );

    new SingleRubberSlider( {
        obj: slider,
        items: slider.find( '> a' ),
        btnNext: slider.find( '.slides__next' ),
        btnPrev: slider.find('.slides__prev')
    } );
});

var SingleRubberSlider = function( params ){
    this.obj = params.obj;
    this.elems = {
        btnPrev: params.btnPrev,
        btnNext: params.btnNext,
        items: params.items
    };
    this.action = false;

    this.init();
};

    SingleRubberSlider.prototype = {
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
                    var count = elems.items.length,
                        i,
                        points = $( '<ul class="points"></ul>' );


                    for( i = 0; i < count; i++ ){
                        points.append( '<li></li>' );
                    }
                    self.obj.append( points );

                    elems.points = points.find( 'li' );

                    elems.points.eq( 0 ).addClass( 'active' );
                    elems.items.eq( 0 ).css( { display: 'block' } );

                    self.core.controls();
                },
                controls: function(){
                    elems.btnPrev.on( {
                        'click': function(){
                            var index = ( ( elems.points.filter( '.active' ).index() - 1 ) == -1 ) ? (elems.points.length - 1) :( elems.points.filter( '.active' ).index() - 1 );

                            self.slideTo( index );
                        }
                    } );
                    elems.btnNext.on( {
                        'click': function(){
                            var index = ( ( elems.points.filter( '.active' ).index() + 1 ) == elems.points.length )? 0:( elems.points.filter( '.active' ).index() + 1 );

                            self.slideTo( index );
                        }
                    } );
                }
            };
        },
        slideTo: function( index ) {
            var self = this,
                elems = self.elems,
                activeIndex = elems.points.filter( '.active' ).index(),
                direction,
                curW = $( window ).width(),
                activeItem = elems.items.eq( activeIndex ),
                activePoint = elems.points.eq( activeIndex ),
                newItem = elems.items.eq( index),
                newPoint = elems.points.eq( index );

            if( !self.action ){
                self.action = true;

                if( activeIndex < index ){
                    direction = 1;
                } else {
                    direction = -1;
                }

                if( activeIndex == 0 && index == ( elems.points.length - 1 ) ){
                    direction = -1;
                } else if ( activeIndex == ( elems.points.length - 1 )  && index == 0 ){
                    direction = 1;
                }

                activePoint.removeClass( 'active' );
                newPoint.addClass( 'active' );

                newItem.css( {
                    display: 'block',
                    left: curW * -direction
                } );
                activeItem.animate( {
                    left: curW * direction
                }, 300, function() {
                    $( this ).css( { display: 'none' } );
                    self.action = false;
                } );
                newItem.animate( {
                    left: 0
                }, 300 );
            }

        }
    };