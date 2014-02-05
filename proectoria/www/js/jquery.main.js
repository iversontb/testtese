$(function(){
    new Slider( $( '.gallery' ) );

    $( '.gallery__lnk' ).lightBox( {
        txtImage: 'Изображение',
        txtOf: 'из'


    } );

} );

var Slider = function( obj ) {
    this.obj = obj;
    this.elems = {
        items: this.obj.find( '.gallery__item' )
    };
    this.curIndex = 0;
    this.move = false;

    this.init();
};
    Slider.prototype = {
        init: function(){
            var self = this;

            self.setItems();
            self.addSlider();
            self.controls();
        },
        controls: function(){
            var self = this;

            self.elems.btnRight.on( 'click', function(){
                var val = self.slid.slider( 'value' );

                if ( val != ( self.elems.items.length - 1 ) && !self.move ) {
                    self.slid.slider( "value", val + 1 );
                }
            } );
            self.elems.btnLeft.on( 'click', function(){
                var val = self.slid.slider( 'value' );

                if ( val != 0 && !self.move ) {
                    self.slid.slider( "value", val - 1 );
                }
            } );
        },
        setItems: function(){
            var self = this,
                items = self.elems.items,
                i,
                curW = self.obj.find('.gallery__layout').width();

            self.tl = new TimelineMax( { paused: true } );

            items.each( function( j ){
                this.actives = [];

                for( i = 0; i < 5; i++ ){
                    switch (i) {
                        case 0:
                            this.actives[ i ] = {
                                scaleX: 0,
                                scaleY: 0,
                                autoAlpha: 0,
                                left: -curW * 2
                            };
                            break;
                        case 1:
                            this.actives[ i ] = {
                                scaleX: 0.5,
                                scaleY: 0.5,
                                autoAlpha: 0.5,
                                left: -curW
                            };
                            break;
                        case 2:
                            this.actives[ i ] = {
                                scaleX: 1,
                                scaleY: 1,
                                autoAlpha: 1,
                                left: 0
                            };
                            break;
                        case 3:
                            this.actives[ i ] = {
                                scaleX: 0.5,
                                scaleY: 0.5,
                                autoAlpha: 0.5,
                                left: curW
                            };
                            break;
                        case 4:
                            this.actives[ i ] = {
                                scaleX: 0,
                                scaleY: 0,
                                autoAlpha: 0,
                                left: curW * 2
                            };
                            break;

                    }
                }

                if( j == 0 ) {
                    TweenLite.to( $(this), 0, {css: this.actives[ 2 ] } );
                } else if( j == 1 ) {
                    TweenLite.to( $(this), 0, {css: this.actives[ 3 ] } );
                } else {
                    TweenLite.to( $(this), 0, {css: this.actives[ 4 ] } );
                }
            } );
        },
        addSlider: function(){
            var self = this;

            self.obj.append( '<div class="gallery__slider"><div class="btn-right"></div><div class="btn-left"></div><div class="gallery__slider-item"></div></div>' );

            self.elems.btnRight = self.obj.find( '.btn-right' );
            self.elems.btnLeft = self.obj.find( '.btn-left' );

            self.slid = self.obj.find( '.gallery__slider .gallery__slider-item' );

            self.slid.slider({
                min: 0,
                max: this.elems.items.length - 1,
                value: 0,
                orientation: "horizontal",
                start: function() {
                    if( self.move ){
                        return false;
                    }
                },
                change: function( event, ui ){
                    if( !self.move ){
                        self.move = true;
                        self.moveTo( ui.value );
                    }
                }
            });
        },
        moveTo: function( to ){
            var self = this,
                active,
                startActive = 0,
                finishActive = 0,
                count = self.curIndex - to,
                duration = Math.abs( 0.5 / count ),
                tl = new TimelineMax( { paused: true, onComplete: function(){ self.move = false; } }),
                direction = 1,
                items = self.elems.items,
                i, itemsCount = items.length,
                cur,
                j;

            if ( count < 0 ) {
                direction = 0;
                count = Math.abs( count );
            }


            for( j = 0; j < itemsCount; j++ ) {
                active = self.curIndex;
                for ( i = 0; i < count; i++ ){
                    if( direction ) {
                        startActive = active - 2;
                        finishActive = active + 1;

                        if( startActive <= 0 ) startActive = 0;
                        if( finishActive >= itemsCount ) finishActive = itemsCount - 1;

                        if( j >= startActive && j <= finishActive ){
                            cur = ( j - active ) + 2;

                            tl.insert( TweenLite.fromTo( items.eq( j ), duration,{
                                css: items[ j ].actives[ cur ]
                            }, {
                                css: items[ j ].actives[ cur + 1 ]
                            } ), ( i * duration ) + 0.01 );
                        }
                        active--;
                    } else {
                        startActive = active - 1;
                        finishActive = active + 2;

                        if( startActive <= 0 ) startActive = 0;
                        if( finishActive >= itemsCount ) finishActive = itemsCount - 1;

                        if( j >= startActive && j <= finishActive ){
                            cur = ( j - active ) + 2;

                            tl.insert( TweenLite.fromTo( items.eq( j ), duration,{
                                css: items[ j ].actives[ cur ]
                            }, {
                                css: items[ j ].actives[ cur - 1 ]
                            } ), ( i * duration ) + 0.01 );

                        }
                        active++;
                    }
                }
            }

            if( direction ) {
                self.curIndex = self.curIndex - count;
            } else {
                self.curIndex = self.curIndex + count;
            }


            tl.play();



        }

    };