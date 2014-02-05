$( window ).load(function(){
    var slider = $( '.ares-slider' );

    new AresSlider2( {
        obj: slider,
        btnPrev: slider.find( '.ares-slider__prev' ),
        btnNext: slider.find( '.ares-slider__next' ),
        items: slider.find( '.ares-slider_item' ),
        wrapper: slider.find( 'ul' ),
        visible: 6,
        indent: 9
    } );
} );

var AresSlider2 = function( params ){
    this.obj = params.obj;
    this.elems = {
        btnPrev: params.btnPrev,
        btnNext: params.btnNext,
        items: params.items,
        wrapper: params.wrapper
    };
    this.link = params.items.find( '>a' );
    this.action = false;
    this.duration = params.duration || 3000;
    this.itemWidth = params.itemWidth || this.elems.items.eq( 0 ).width();
    this.indent = params.indent || 20;
    this.active = 0;
    this.speed = params.speed || 300;
    this.visible = params.visible || 3;

    this.init();
};
    AresSlider2.prototype = {
        init: function(){
            var self = this;

            self.core = self.core();
            self.core.normalWiew();
            self.core.controls();
            self.link.eq( 0 ).trigger( 'click' );
            self.core.slideToNext();
        },
        core: function(){
            var self = this,
                elems = self.elems;

            return {
                normalWiew: function(){
                    var countItems = elems.items.length,
                        curIndex,
                        tempLeft = 2,
                        i;

                    self.step = self.itemWidth + self.indent;

                    elems.items.width( self.itemWidth );
                    elems.wrapper.width( ( self.itemWidth * self.visible ) + ( self.indent * ( self.visible - 1 ) ) + 4 );

                    self.maxHeight = 0;
                    elems.items.each( function(){
                        var curItem = $( this );

                        if( curItem.height() > self.maxHeight ){
                            self.maxHeight = curItem.height()
                        }
                    } );

                    if( countItems <= self.visible){
                        elems.items.each( function(){
                            $( this ).css( { left: tempLeft } );
                            tempLeft += self.step;
                        } );
                        elems.btnNext.css( { display: 'none' } );
                        elems.btnPrev.css( { display: 'none' } );
                    } else {
                        for( i = self.active; i < ( self.active + self.visible ); i++ ) {
                            curIndex = ( i >= elems.items.length )? i - elems.items.length : i;

                            elems.items.eq( curIndex ).css( {
                                left: tempLeft
                            } );
                            tempLeft += self.step;
                        }
                    }

                },
                slideToNext: function(){
    //                self.timer = setTimeout( function(){
    //                    elems.btnNext.trigger( 'click' );
    //                }, self.duration );
                },
                controls: function(){
                    $( window ).on( {
                        'resize': function(){
                            self.core.normalWiew();
                        }
                    } );
                    elems.btnPrev.on( {
                        'click': function(){
                            if( !self.action ){
                                self.slidePrev();
                            }
                        }
                    } );
                    elems.btnNext.on( {
                        'click': function(){
                            if( !self.action ){
                                self.slideNext();
                            }
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
                    self.link.on( {
                        'click': function(){
                            self.core.openBig( $( this ) );

                            return false;
                        }
                    } );
                },
                openBig: function( item ){
                    var newImg = new Image();

                    self.link.removeClass( 'active' );
                    item.addClass( 'active' );

                    $( newImg ).on( {
                        'load': function(){
                            $( '.bigPic' ).remove();
                            $( newImg ).addClass( 'bigPic' );
                            $( '.card__info' ).append( newImg );
                            $( newImg ).css( { display: 'none' } );
                            $( newImg).fadeIn(300);
                        }
                    } );
                    newImg.src = item.attr( 'href' );
                }
            };
        },
        slideNext: function() {
            var self = this,
                elems = self.elems,
                tempLeft = -self.step,
                i;

            self.action = true;

            clearTimeout( self.timer );
            for( i = self.active; i < ( self.active + self.visible + 1 ); i++ ) {
                curIndex = ( i >= elems.items.length )? i - elems.items.length : i;

                if( i == self.active + self.visible ) {
                    elems.items.eq( curIndex ).css( { left: self.visible * self.step + 2 } );
                }
                elems.items.eq( curIndex ).animate( {
                    left: tempLeft+2
                }, self.speed );

                tempLeft += self.step;
            }
            setTimeout( function(){
                self.action = false;
                self.active = ( self.active + 1 == elems.items.length )?0 : self.active + 1;
                self.core.slideToNext();

            }, self.speed );
        },
        slidePrev: function() {
            var self = this,
                elems = self.elems,
                tempLeft = 0,
                i;

            self.action = true;
            clearTimeout( self.timer );
            for( i = self.active - 1; i < ( self.active + self.visible ); i++ ) {
                curIndex = ( i >= elems.items.length )? i - elems.items.length : i;

                if( i == self.active - 1 ) {
                    elems.items.eq( curIndex ).css( { left: -self.step + 2 } );
                }
                elems.items.eq( curIndex ).animate( {
                    left: tempLeft+2
                }, self.speed );

                tempLeft += self.step;
            }
            setTimeout( function(){
                self.action = false;
                self.active = ( self.active - 1 == -1 )?elems.items.length-1 : self.active - 1;
                self.core.slideToNext();
            }, self.speed );

        }
    };