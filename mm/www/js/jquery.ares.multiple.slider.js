$( window ).load(function(){
    $( '.ares-slider').each( function(){
        var curItem = $( this );
        new AresSlider2( {
            obj: curItem,
            btnPrev: curItem.find( '.ares-slider__prev' ),
            btnNext: curItem.find( '.ares-slider__next' ),
            items: curItem.find( '.ares-slider_item' ),
            wrapper: curItem.find( 'ul' ),
            visible: 3,
            indent: -20
        } );
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
    this.duration = params.duration || 5000;
    this.itemWidth = params.itemWidth || this.elems.items.eq( 0 ).width();
    this.indent = params.indent || 20;
    this.active = 0;
    this.scale = 1;
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
                self.tl = new TimelineMax( {
                    paused: true
                } );
                elems.items.each( function(){
                    self.tl.insert( new TweenMax.fromTo( $( this ), 0.1, {
                        transformPerspective:500,
                        scale: 0.73
                    }, {
                        scale: 0.73,
                        ease: Linear.easeNone
                    } ), 0 );
                } );
                self.tl.insert( new TweenMax.fromTo( elems.items.eq( self.scale ), 0.1, {
                    transformPerspective:500,
                    scale: 1
                }, {
                    scale: 1,
                    ease: Linear.easeNone
                } ), 0 );
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
        self.tl = new TimelineMax( {
            paused: true
        } );

        var old = self.scale;

        self.scale = ( self.scale + 1 == elems.items.length )?0 : self.scale + 1;
        self.tl.insert( new TweenMax.fromTo( elems.items.eq( self.scale ), self.speed/1000, {
            transformPerspective:500,
            scale: 0.73
        }, {
            scale: 1,
            ease: Linear.easeNone
        } ), 0 );
        self.tl.insert( new TweenMax.fromTo( elems.items.eq( old ), self.speed/1000, {
            transformPerspective:500,
            scale: 1
        }, {
            scale: 0.73,
            ease: Linear.easeNone
        } ), 0 );
        self.tl.play();

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
        self.tl = new TimelineMax( {
            paused: true
        } );
        var old = self.scale;

        self.scale = ( self.scale - 1 == -1 )?elems.items.length-1 : self.scale - 1;
        console.log(self.scale)
        self.tl.insert( new TweenMax.fromTo( elems.items.eq( self.scale ), self.speed/1000, {
            transformPerspective:500,
            scale: 0.73
        }, {
            scale: 1,
            ease: Linear.easeNone
        } ), 0 );
        self.tl.insert( new TweenMax.fromTo( elems.items.eq( old ), self.speed/1000, {
            transformPerspective:500,
            scale: 1
        }, {
            scale: 0.73,
            ease: Linear.easeNone
        } ), 0 );
        self.tl.play();
        setTimeout( function(){
            self.action = false;
            self.active = ( self.active - 1 == -1 )?elems.items.length-1 : self.active - 1;
            self.core.slideToNext();
        }, self.speed );

    }
};