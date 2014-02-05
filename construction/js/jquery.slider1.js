$(function(){
    var slider = $( '.ares-slider' );

    new AresSlider1( {
        obj: slider,
        items: slider.find( '> a' ),
        btnNext: slider.find( '.ares-slider__next' ),
        btnPrev: slider.find('.ares-slider__prev'),
        preview: slider.find('.ares-slider__preview ul')
    } );
});

var AresSlider1 = function( params ){
    this.obj = params.obj;
    this.elems = {
        btnPrev: params.btnPrev,
        btnNext: params.btnNext,
        items: params.items,
        preview: params.preview
    };
    this.action = false;
    this.duration = params.duration || 3000;
    this.newLeft = 0;

    this.init();
};
    AresSlider1.prototype = {
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
                        points = $( '<ul class="ares-slider__points"></ul>'),
                        previwWidth = elems.preview.find( 'li' ).eq( 0 ).width();

                    self.previwOuterWidth = elems.preview.find( 'li' ).eq( 1 ).outerWidth( true );

                    elems.previewItems = elems.preview.find( 'li' );
                    elems.preview.width( ( self.previwOuterWidth * count ) - (self.previwOuterWidth - previwWidth) );


                    for( i = 0; i < count; i++ ){
                        points.append( '<li></li>' );
                    }
                    self.obj.append( points );

                    elems.points = points.find( 'li' );

                    elems.points.eq( 0 ).addClass( 'active' );
                    elems.items.eq( 0 ).css( { display: 'block' } );

                    self.core.controls();

                    self.core.slideToNext();
                },
                slideToNext: function(){
                    self.timer = setTimeout( function(){
                        elems.btnNext.trigger( 'click' );
                    }, self.duration );
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
                    elems.points.on( {
                        'click': function(){
                            var curItem = $( this );

                            if( !curItem.hasClass( 'active' ) ){
                                self.slideTo( curItem.index() );
                            }
                        }
                    } );
                    elems.previewItems.on( {
                        'click': function(){
                            var curItem = $( this );

                            elems.points.eq( curItem.index() ).trigger( 'click' );
                        }
                    } );
                    self.obj.on( {
                        'mouseover': function(){
                            clearTimeout( self.timer );
                        },
                        'mouseleave': function(){
                            self.core.slideToNext();
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
                curW = 100,
                activeItem = elems.items.eq( activeIndex ),
                activePoint = elems.points.eq( activeIndex ),
                newItem = elems.items.eq( index ),
                newPoint = elems.points.eq( index),
                newLeft;

            clearTimeout( self.timer );
            if( !self.action ){
                self.action = true;

                if( activeIndex < index ){
                    direction = -1;
                } else {
                    direction = 1;
                }

                if( activeIndex == 0 && index == ( elems.points.length - 1 ) ){
                    direction = -1;
                } else if ( activeIndex == ( elems.points.length - 1 )  && index == 0 ){
                    direction = 1;
                }

                elems.previewItems.removeClass( 'active' );
                elems.previewItems.eq( index ).addClass( 'active' );
                activePoint.removeClass( 'active' );
                newPoint.addClass( 'active' );

                newLeft = -self.previwOuterWidth * index;

                if(  elems.preview.width() + newLeft < elems.preview.parent().width() ) {
                    newLeft = elems.preview.parent().width() - elems.preview.width();
                }


                if( self.newLeft != newLeft ){
                    elems.preview
                        .stop( true, false )
                        .animate( { left: newLeft }, 300);
                    self.newLeft = newLeft;
                }

                newItem.css( {
                    display: 'block',
                    left: curW * -direction,
                    opacity: 0
                } );
                activeItem.animate( {
                    left: curW * direction,
                    opacity: 0
                }, 300, function() {
                    $( this ).css( { display: 'none' } );
                    self.action = false;
                    self.core.slideToNext();
                } );
                newItem.animate( {
                    left: 0,
                    opacity: 1
                }, 300 );
            }

        }
    };