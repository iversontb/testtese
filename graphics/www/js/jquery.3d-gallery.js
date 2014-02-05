$( window ).on( 'load', function(){
    var gal = new Gallery3d( $('.gallery-3d') );
});

var Gallery3d = function( obj ){
    this.obj = obj;
    this.elems = {
        items: this.obj.find( '.item_3d' )
    };
    this.active = 0;
    this.duration = 0.5;

    this.init();
};
    Gallery3d.prototype = {
        init: function(){
            var self = this;

            self.core = self.core();
            self.core.addSlider();
            self.core.normalView();
            self.core.controls();
        },
        core: function(){
            var self = this,
                elems = self.elems,
                items = elems.items;

            return {
                controls: function(){
                    $('.slider__btn.prev').on( {
                        click: function(){
                            self.sliderok.slider( "value", self.sliderok.slider( "value" ) - 1 );
                        }
                    } );
                    $('.slider__btn.next').on( {
                        click: function(){
                            self.sliderok.slider( "value", self.sliderok.slider( "value" ) + 1 );
                        }
                    } );
                    items.on( {
                        click: function(){
                            var curElem = $( this );

                            if( curElem.index() == self.active ){
                                self.openItem( curElem.attr( 'data-id' ) );
                            } else {
                                self.sliderok.slider( "value", curElem.index() + 1 );
                            }
                        }
                    } );
                    $( window ).on( {
                        keyup: function(){
                            self.largeGal.hide();
                        }
                    } );
                },
                addSlider: function(){
                    self.elems.items.css( { display: 'block' } );

                    self.sliderok = $( '<div class="slider"></div>' );
                    self.obj.append( $('<div class="sliderWrap"><div class="slider__btn prev"></div><div class="slider__btn next"></div><span><span>'+ ( self.active + 1 )+'</span> из ' + items.length + '</span></div>').append( $('<div class="slider__layout"></div>').append( self.sliderok ) ) );

                    var span = $( '.sliderWrap > span > span' );
                    self.sliderok.slider({
                        value: self.active,
                        min: 1,
                        max: items.length,
                        step: 1,
                        slide: function( event, ui ) {
                            span.text( ui.value );
                            self.active = ui.value - 1;
                            self.tl.tweenTo( self.duration * self.active );
                        },
                        change: function(event, ui){
                            span.text( ui.value );
                            self.active = ui.value - 1;
                            self.tl.tweenTo( self.duration * self.active );
                        }
                    });
                },
                normalView: function(){
                    var count = items.length,
                        arrData = [
                            {
                                x: 510,
                                rotate: 0,
                                scale: 1,
                                opacity: 1,
                                z: 5
                            },
                            {
                                x: 334,
                                rotate: 45,
                                scale: 0.9,
                                opacity:.75,
                                z: 4
                            },
                            {
                                x: 203,
                                rotate: 70,
                                scale: 0.8,
                                opacity:.5,
                                z: 3
                            },
                            {
                                x: 82,
                                rotate: 80,
                                scale: 0.7,
                                opacity: .25,
                                z: 2
                            },
                            {
                                x: 0,
                                rotate: 85,
                                scale: 0.6,
                                opacity: 0,
                                z: 1
                            }
                        ];

                    self.tl = new TimelineMax( {
                        paused: true
                    } );

                    items.each( function( i ){
                        var curItem = $( this ),
                            from = i - count + 1,
                            to = i,
                            duration = self.duration,
                            j, curData, nextData;

                        for( j = from; j < to; j++ ){
                            curData = getX( j );
                            nextData = getX( j + 1 );

                            self.tl.insert( new TweenMax.fromTo( curItem[ 0 ], duration, {
                                transformPerspective:500,
                                scale: nextData.scale,
                                transformOrigin:"center center",
                                rotationY: nextData.rotate,
                                autoAlpha: nextData.opacity
                            }, {
                                rotationY: curData.rotate,
                                scale: curData.scale,
                                autoAlpha: curData.opacity,
                                ease: Linear.easeNone
                            } ),((to - j)-1) * duration );
                            self.tl.insert( new TweenMax.fromTo( curItem, duration, {
                                css: {
                                    left: nextData.x,
                                    zIndex: nextData.z,
                                    opacity: nextData.opacity
                                }
                            }, {
                                css: {
                                    left: curData.x,
                                    zIndex: curData.z,
                                    opacity: curData.opacity
                                },
                                onReverseComplete : function(){
                                    if($.browser.msie && $.browser.version < 9 ){
                                        if( !this.vars.css.opacity && !this.vars.startAt.css.opacity ) {
                                            this.target.css( { display: 'none' } );
                                        } else {
                                            this.target.css( { display: 'block' } );
                                        }
                                    }
                                },
                                onStart: function(){
                                    if($.browser.msie && $.browser.version < 9 ){
                                        if( !this.vars.css.opacity && !this.vars.startAt.css.opacity ) {
                                            this.target.css( { display: 'none' } );
                                        } else {
                                            this.target.css( { display: 'block' } );
                                        }
                                    }
                                },
                                ease: Linear.easeNone
                            } ),((to - j)-1) * duration );

                            self.tl.seek( duration * self.active );
                        }
                        function getX( index ){
                            var item = {};

                            if( index < -2 ){
                                item.x = 0;
                                item.rotate = 90;
                                item.scale = 0.6;
                                item.opacity = 0;
                                item.z = 1;
                            } else  if( index >= 3 ){
                                item.x = 1020;
                                item.rotate = 270;
                                item.scale = 0.6;
                                item.opacity = 0;
                                item.z = 1;
                            } else if ( index > 0) {
                                item.x = 1020 - arrData[ index ].x;
                                item.rotate = -arrData[ index ].rotate + "_short";
                                item.scale = arrData[ Math.abs( index ) ].scale;
                                item.opacity = arrData[ Math.abs( index ) ].opacity;
                                item.z = arrData[ Math.abs( index ) ].z;
                            } else {
                                item.x = arrData[ Math.abs( index ) ].x;
                                item.rotate = arrData[ Math.abs( index ) ].rotate;
                                item.scale = arrData[ Math.abs( index ) ].scale;
                                item.opacity = arrData[ Math.abs( index ) ].opacity;
                                item.z = arrData[ Math.abs( index ) ].z;
                            }

                            return item;
                        }
                    } );
                }
            };
        },
        openItem: function( id ){
            var self = this;
            self.largeGal = new LargeGallery( id, $( '.gallery-3d' ).attr( 'data-php' ) );
        }
    };