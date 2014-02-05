$( window ).load(function(){


    $( '.ares-slider' ).each(function () {
        var slider = $( this );

        new AresSlider2( {
            obj: slider,
            btnPrev: slider.find( '.ares-slider__prev' ),
            btnNext: slider.find( '.ares-slider__next' ),
            items: slider.find( '.ares-slider_item' ),
            visibleCount: 3,
            indent: 0.0111607142857143
        } );
    });


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
    this.visibleCount = params.visibleCount || 3;
    this.indent = params.indent || 20;
    this.active = 0;
    this.speed = params.speed || 300;

    this.init();
};
AresSlider2.prototype = {
    init: function(){
        var self = this;

        self.core = self.core();
        self.core.normalWiew();
        self.core.controls();
    },
    core: function(){
        var self = this,
            elems = self.elems;

        return {
            normalWiew: function(){
                var curWidth = self.obj.width(),
                    countItems = elems.items.length,
                    itemW,
                    curIndex,
                    tempLeft = 0,
                    i;

                self.visibleCount = ( Math.floor( curWidth / 121 ) > countItems )?countItems: Math.floor( curWidth / 121 );
                self.indent = Math.floor( ( curWidth - (self.visibleCount * 100) ) / ( self.visibleCount - 1 ) );

                itemW = 100;

                self.step = itemW + self.indent;

                elems.items.width( itemW );

                self.maxHeight = 0;
                elems.items.css( { display: 'block' } );

                elems.btnNext.css( { top: elems.items.eq( 0).find( 'img' ).height()/2 } );
                elems.btnPrev.css( { top: elems.items.eq( 0).find( 'img' ).height()/2 } );

                if( countItems <= self.visibleCount){
                    elems.items.each( function(){
                        $( this ).css( { left: tempLeft } );
                        tempLeft += self.step;
                    } );
                    elems.btnNext.css( { display: 'none' } );
                    elems.btnPrev.css( { display: 'none' } );
                } else {
                    elems.items.css( { left: -10000 } );
                    for( i = self.active; i < ( self.active + self.visibleCount ); i++ ) {
                        curIndex = ( i >= elems.items.length )? i - elems.items.length : i;

                        elems.items.eq( curIndex ).css( {
                            left: tempLeft
                        } );
                        if( i == ( self.active + self.visibleCount ) - 1 ){
                            elems.btnNext.css( { left: tempLeft + itemW } );
                        }
                        tempLeft += self.step;
                    }
                }
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
            }
        };
    },
    slideNext: function() {
        var self = this,
            elems = self.elems,
            tempLeft = -self.step,
            i;

        self.action = true;

        for( i = self.active; i < ( self.active + self.visibleCount + 1 ); i++ ) {
            curIndex = ( i >= elems.items.length )? i - elems.items.length : i;

            if( i == self.active + self.visibleCount ) {
                elems.items.eq( curIndex ).css( { left: self.visibleCount * self.step } );
            }
            elems.items.eq( curIndex ).animate( {
                left: tempLeft
            }, self.speed );

            tempLeft += self.step;
        }
        setTimeout( function(){
            self.action = false;
            self.active = ( self.active + 1 == elems.items.length )?0 : self.active + 1;

        }, self.speed );
    },
    slidePrev: function() {
        var self = this,
            elems = self.elems,
            tempLeft = 0,
            i;

        self.action = true;

        for( i = self.active - 1; i < ( self.active + self.visibleCount ); i++ ) {
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

        }, self.speed );

    }
};