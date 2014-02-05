$( window ).load(function(){
    var slider = $( '.ares-slider' );

    new AresSlider2( {
        obj: slider,
        btnPrev: slider.find( '.ares-slider__prev' ),
        btnNext: slider.find( '.ares-slider__next' ),
        items: slider.find( '.ares-slider_item' ),
        wrapper: slider.find( 'ul' ),
        visible: 3,
        indent: 21
    } );

    var slider = $( '.ares-slider2' );

    new AresSlider1( {
        obj: slider,
        items: slider.find( '> .ares-slider_item' ),
        btnNext: slider.find( '.ares-slider2__next' ),
        btnPrev: slider.find('.ares-slider2__prev')
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
        self.core.slideToNext();
    },
    core: function(){
        var self = this,
            elems = self.elems;

        return {
            normalWiew: function(){
                var countItems = elems.items.length,
                    curIndex,
                    tempLeft = 0,
                    i;

                self.step = self.itemWidth + self.indent;

                elems.items.width( self.itemWidth );
                elems.wrapper.width( ( self.itemWidth * self.visible ) + ( self.indent * ( self.visible - 1 ) ) );

                self.maxHeight = 0;
                elems.items.each( function(){
                    var curItem = $( this );

                    if( curItem.height() > self.maxHeight ){
                        self.maxHeight = curItem.height()
                    }
                } );
                elems.wrapper.height( self.maxHeight );

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
                self.timer = setTimeout( function(){
                    if( elems.items.length > self.visible ){
                        elems.btnNext.trigger( 'click' );
                    }
                }, self.duration );
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
                elems.items.eq( curIndex ).css( { left: self.visible * self.step } );
            }
            elems.items.eq( curIndex ).animate( {
                left: tempLeft
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
                elems.items.eq( curIndex ).css( { left: -self.step } );
            }
            elems.items.eq( curIndex ).animate( {
                left: tempLeft
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


var AresSlider1 = function( params ){
    this.obj = params.obj;
    this.elems = {
        btnPrev: params.btnPrev,
        btnNext: params.btnNext,
        items: params.items
    };
    this.action = false;
    this.active = 0;
    this.duration = params.duration || 3000;

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
                elems.items.eq( 0 ).css( { left: 184, display: 'block' } );
                if( elems.items.length > 1 ){
                    var points = $( '<ul class="ares-slider__points"></ul>'),
                        temp;

                    self.movieType = $( '<div class="movieType"></div>' );

                    elems.items.each( function( i ){
                        points.append( '<li></li>' );
                        self.movieType.append( $( this ).clone() );
                    } );
                    self.movieType.append( elems.items.clone() );
                    self.movieType.append( elems.items.clone() );
                    self.movieType.width( self.movieType.find( '>*').length * 503 );
                    self.movieType.find( '>*').css( {
                        position: 'relative',
                        display: 'inline-block',
                        verticalAlign: 'top',
                        top: 'auto',
                        left: 'auto'
                    } );

                    self.movieType.css( {
                        left: -( ( elems.items.length * 503 ) + ( self.active * 503 ) - 184 )
                    } );

                    self.obj.append( self.movieType );
                    self.obj.append( points );

                    self.points = points.find( 'li' );
                    self.points.eq( 0 ).addClass( 'active' )
                }

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
                        var index = ( ( self.points.filter( '.active' ).index() - 1 ) == -1 ) ? (self.points.length - 1) :( self.points.filter( '.active' ).index() - 1 );

                        self.core.slideTo( index );
                    }
                } );
                elems.btnNext.on( {
                    'click': function(){
                        var index = ( ( self.points.filter( '.active' ).index() + 1 ) == self.points.length )? 0:( self.points.filter( '.active' ).index() + 1 );

                        self.core.slideTo( index );
                    }
                } );
                self.points.on( {
                    'click': function(){
                        var curItem = $( this );
                        if( !curItem.hasClass( 'active' ) ){
                            self.core.slideTo( curItem.index() )
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
            },
            slideTo: function( index ) {
                var activeIndex = self.points.filter( '.active' ).index(),
                    curItem = elems.items.eq( activeIndex ),
                    newItem = elems.items.eq( index ),
                    activePoint = self.points.eq( activeIndex ),
                    newPoint = self.points.eq( index);

                clearTimeout( self.timer );
                if( !self.action ){
                    self.active = index;
                    self.action = true;

                    activePoint.removeClass( 'active' );
                    newPoint.addClass( 'active' );

                    curItem.css( { 'display': 'none' } );
                    self.movieType.animate( {
                        left: -( ( elems.items.length * 503 ) + ( self.active * 503 ) - 184 )
                    }, 300, function(){
                        newItem.css( { 'display': 'block' } );
                        self.action = false;
                        self.core.slideToNext();
                    } );
                }

            }
        };
    }

};


