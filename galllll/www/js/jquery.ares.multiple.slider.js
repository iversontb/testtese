$( window ).load(function(){
    var slider = $( '.ares-slider' );

    new AresSlider2( {
        obj: slider,
        btnPrev: slider.find( '.ares-slider__prev' ),
        btnNext: slider.find( '.ares-slider__next' ),
        items: slider.find( '.ares-slider_item' ),
        visible: 3
    } );
} );

var AresSlider2 = function( params ){
    this.obj = params.obj;
    this.elems = {
        btnPrev: params.btnPrev,
        btnNext: params.btnNext,
        items: params.items
    };
    this.action = false;
    this.duration = params.duration || 3000;
    this.active = 0;
    this.speed = params.speed || 2000;
    this.visible = params.visible || 3;

    this.init();
};
AresSlider2.prototype = {
    init: function(){
        var self = this;

        self.core = self.core();
        self.core.bulild();
    },
    core: function(){
        var self = this,
            elems = self.elems;

        return {
            bulild: function(){
                var i,
                    curItem,
                    tl = new TimelineMax();

                self.itemWidth = elems.items.eq( 0 ).width();
                self.indent = ( self.obj.width() - ( self.visible * self.itemWidth ) ) / ( self.visible - 1 );

                self.items = [];
                elems.items.each( function( i ){
                    curItem = $( this );
                    self.items[ i ] = curItem.find( '.ares-slider_block' ).clone();
                    curItem.remove();
                } );

                self.step = self.itemWidth + self.indent;

                for( i = 0; i < self.visible; i++ ){
                    curItem = $( '<li class="ares-slider_item" style="left: ' + i * self.step + 'px"></li>' );
                    curItem.append( self.items[ i ].clone().addClass( 'ares-slider_face' ) );
                    self.obj.find( '> ul' ).append( curItem );
                    tl.insert( TweenLite.fromTo( curItem.find( '.ares-slider_block' ), 0,{
                        transformPerspective:500,
                        transformOrigin:"center center",
                        rotationY: 0
                    }, {
                        rotationY: 0
                    } ), 0 );
                }

                elems.items = self.obj.find( ' > ul li' );

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
            curItem,
            parent,
            curIndex = self.active + 1,
            tl = new TimelineMax( {
                paused: true,
                onComplete: function(){
                    var back = self.obj.find( '.ares-slider_back' );
                    self.obj.find( '.ares-slider_face' ).remove();
                    back.removeClass( 'ares-slider_back' );
                    back.addClass( 'ares-slider_face' );
                    self.action = false;
                    self.core.slideToNext();
                }
            } );

        clearTimeout( self.timer );
        self.action = true;
        elems.items.each( function(){

            if( curIndex == self.items.length  ){
                curIndex = 0
            }

            parent = $( this );
            curItem = parent.find( '.ares-slider_face' );
            parent.append( self.items[ curIndex ].clone().addClass( 'ares-slider_back' ) );
            curIndex++;

            tl.insert( TweenLite.fromTo( curItem, self.speed/1000,{
                transformPerspective:500,
                transformOrigin:"center center",
                rotationY: 0
            }, {
                rotationY: 180,

                ease: Elastic.easeOut
            } ), 0 );
            tl.insert( TweenLite.fromTo( parent.find( '.ares-slider_back' ), self.speed/1000,{
                transformPerspective:500,
                transformOrigin:"center center",
                rotationY: -180
            }, {
                rotationY: 0,
                ease: Elastic.easeOut
            } ), 0 );
        } );

        if( self.active == self.items.length - 1 ){
            self.active = 0;
        } else {
            self.active++;
        }
        tl.play();
    },
    slidePrev: function() {
        var self = this,
            elems = self.elems,
            curItem,
            parent,
            curIndex = self.active + 1,
            tl = new TimelineMax( {
                paused: true,
                onComplete: function(){
                    var back = self.obj.find( '.ares-slider_back' );
                    self.obj.find( '.ares-slider_face' ).remove();
                    back.removeClass( 'ares-slider_back' );
                    back.addClass( 'ares-slider_face' );
                    self.action = false;
                    self.core.slideToNext();
                }
            } );

        clearTimeout( self.timer );
        self.action = true;
        elems.items.each( function(){

            if( curIndex == self.items.length  ){
                curIndex = 0
            }

            parent = $( this );
            curItem = parent.find( '.ares-slider_face' );
            parent.append( self.items[ curIndex ].clone().addClass( 'ares-slider_back' ) );
            curIndex++;

            tl.insert( TweenLite.fromTo( curItem, self.speed/1000,{
                transformPerspective:500,
                transformOrigin:"center center",
                rotationY: 0
            }, {
                rotationY: 180,

                ease: Elastic.easeOut
            } ), 0 );
            tl.insert( TweenLite.fromTo( parent.find( '.ares-slider_back' ), self.speed/1000,{
                transformPerspective:500,
                transformOrigin:"center center",
                rotationY: -180
            }, {
                rotationY: 0,
                ease: Elastic.easeOut
            } ), 0 );
        } );

        if( self.active == 0 ){
            self.active = self.items.length - 1;
        } else {
            self.active--;
        }
        tl.play();
    }
};