$( function(){
    new CardGallery( $( '.card__gallery' ) );
} );

$( window ).load(function(){
    var galSlider = $( '.card__gallery' );
    new AresSlider2( {
        obj: galSlider,
        btnPrev: galSlider.find( '.prev' ),
        btnNext: galSlider.find( '.next' ),
        items: galSlider.find( 'li' ),
        visibleCount: 3,
        indent: 0.025531914893617
    } );
});


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
                var curWidth = self.obj.find( 'ul' ).width(),
                    countItems = elems.items.length,
                    itemW,
                    curIndex,
                    tempLeft = 0,
                    i;

                self.visibleCount = ( Math.floor( curWidth / 80 ) > countItems )?countItems: Math.floor( curWidth / 80 );
                self.indent = Math.floor( ( curWidth - (self.visibleCount * 74) ) / ( self.visibleCount - 1 ) );

                itemW = 74;

                self.step = itemW + self.indent;

                elems.items.width( itemW );

                self.maxHeight = 0;
                elems.items.css( { display: 'block' } );

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

var CardGallery = function( obj ){
    this.obj = obj;
    this.elems = {
        screen: this.obj.find( '.card__gallery-pic' ),
        btn: this.obj.find( 'li' )
    };
    this.action = false;

    this.init();
};

CardGallery.prototype = {
    init: function(){
        var self = this;

        self.elems.btn.eq( 0 ).addClass( 'active' );
        self.core = self.core();
        self.core.controls();
    },
    core: function(){
        var self = this,
            elems = self.elems;

        return {
            controls: function(){

                elems.btn.find( 'a' ).on( {
                    'click': function(){
                        var curElem = $( this).parent();

                        if( !curElem.hasClass( 'active' ) && !self.action ) {
                            elems.btn.removeClass( 'active' );
                            curElem.addClass( 'active' );
                            self.action = true;

                            self.show( curElem );
                        }

                        return false;
                    }
                } );
            }
        };
    },
    show: function( item ){
        var self = this,
            elems = self.elems,
            src = item.find( 'a' ).attr( 'href'),
            img = $( new Image() ),
            oldLink = self.elems.screen.find( 'a' ),
            newLink = $( '<a style="display: none;" href="' + item.find( 'a' ).attr( 'data-url') + '"></a>' );

        img
            .load( function(){
                newLink.append( img );
                self.elems.screen.append( newLink );
                elems.screen.css( {
                    height: elems.screen.height(),
                    width: elems.screen.width()
                } );
                $( [ newLink[0],oldLink[0] ] ).css( {
                    position: 'absolute',
                    width: '100%'
                } );
                oldLink.fadeOut( 300, function(){
                    $( this ).remove();
                } );
                newLink.fadeIn( 300, function(){
                    self.action = false;
                    $( [ newLink[0],elems.screen[0] ]).removeAttr( 'style' );
                } );
            } )
            .attr( 'src', src );
    }
};
