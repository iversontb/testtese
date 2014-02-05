$( function(){
    new Gallery( $( '.gallery' ) );
} );

/*
    Gallery

    properties:
        obj ( gallery object );
        activeIndex;
        isMove;
        ie;
        elems.

    methods:
        init (initialize object)
        controls (initialize controls)
        slideLeft
        slideRight
        show (shog gallery)
        loadGallery (add gallery to body)
*/
var Gallery = function( obj ){
    this.obj = obj;
    this.activeIndex = 0;
    this.isMove = false;
    this.ie = new IE();
    this.elems = {
        items: this.obj.find( 'a' )
    };

    this.init();
};
    Gallery.prototype = {
        init: function(){
            var self = this;

            self.loadGallery();
            self.controls();
        },
        controls: function() {
            var self = this,
                elems = self.elems;

            elems.items.click( function(){
                self.show( $( this).parent().index() );
                return false;
            } );

            self.close.click( function(){
                self.popap.fadeOut();
            } );

            self.btn.click( function(){
                var curElem = $( this ),
                    newIndex = self.activeIndex;

                if( !self.isMove ){
                    self.isMove = true;
                    self.close.fadeOut(100);
                    self.btn.fadeOut(100);
                    if( curElem.hasClass( 'ares-galery-popup__prev' ) ){
                        newIndex --;

                        self.slideLeft(newIndex);
                    } else {
                        newIndex ++;
                        if(newIndex == self.wraps.length) newIndex = 0;
                        self.slideRight(newIndex);
                    }
                }
            } );
        },
        slideLeft: function( index ){
            var self = this,
                curElem = self.wraps.eq( self.activeIndex ),
                nextElem = self.wraps.eq( index ),
                left = curElem.position().left,
                newPos;

            nextElem.css( { display: 'block' } );
            newPos = nextElem.find( 'img').position();
            nextElem.css( { display: 'none' } );

            if( self.ie.ltie8 ){
                self.wraps.find( 'span').css( { display: 'none' } );
            }
            self.activeIndex = nextElem.index();
            nextElem.css( {
                'display':'block',
                left: left - 200,
                opacity: 0
            } );
            curElem.animate( {
                opacity: 0,
                left: left + 200
            }, 300, function() {
                $( this ).css( {
                    'display':'none',
                    left: left,
                    opacity: 1
                } );
            } );

            setTimeout(function(){
                nextElem.animate( { opacity: 1, left: left }, 300, function(){
                    var newPos = $( this).find( 'img').position();

                    self.isMove = false;
                    self.close.css( {
                        right: newPos.left - 27,
                        top: newPos.top - 21
                    } );
                    self.close.fadeIn(100);
                    self.btn.filter( '.ares-galery-popup__prev').css( { left: newPos.left + 27 } );
                    self.btn.filter( '.ares-galery-popup__next' ).css( { right: newPos.left + 27 } );
                    self.btn.fadeIn(100);
                    if( self.ie.ltie8 ){
                        nextElem.find( 'span').css( { display: 'block' } );
                    }
                } );
            }, 150 );
        },
        slideRight: function( index ){
            var self = this,
                curElem = self.wraps.eq( self.activeIndex ),
                nextElem = self.wraps.eq( index ),
                left = curElem.position().left,
                newPos;

            nextElem.css( { display: 'block' } );
            newPos = nextElem.find( 'img').position();
            nextElem.css( { display: 'none' } );

            nextElem.find( 'span').css( {top: 585 - newPos.top } );
            if( self.ie.ltie8 ){
                self.wraps.find( 'span').css( { display: 'none' } );
            }
            self.activeIndex = nextElem.index();
            nextElem.css( {
                'display':'block',
                left: left + 200,
                opacity: 0
            } );
            curElem.animate( {
                opacity: 0,
                left: left - 200
            }, 300, function() {
                $( this ).css( {
                    'display':'none',
                    left: left,
                    opacity: 1
                } );
            } );

            setTimeout(function(){
                nextElem.animate( { opacity: 1, left: left }, 300, function(){
                    self.isMove = false;
                    self.close.css( {
                        right: newPos.left - 27,
                        top: newPos.top - 21
                    } );
                    self.close.fadeIn(100);
                    self.btn.filter( '.ares-galery-popup__prev').css( { left: newPos.left + 27 } );
                    self.btn.filter( '.ares-galery-popup__next' ).css( { right: newPos.left + 27 } );
                    self.btn.fadeIn(100);
                    if( self.ie.ltie8 ){
                        nextElem.find( 'span').css( { display: 'block' } );
                    }
                } );
            }, 150 );
        },
        show: function ( index ){
            var self = this,
                newPos;

            self.activeIndex = index;
            self.wraps.css( { display: 'none' } );
            self.wraps.eq( index ).css( { display: 'block' } );
            if( self.ie.ltie8 ){
                self.wraps.find( 'span').css( { display: 'none' } );
                self.wraps.eq( index ).find( 'span').css( { display: 'block' } );
            }

            self.popap.css( {display: 'block'} );
            newPos  = self.wraps.eq( index ).find( 'img' ).position();

            self.popap.css( {display: 'none'} );

            self.wraps.eq( index ).find( 'span').css( {top: 585 - newPos.top } );

            self.close.css( {
                right: newPos.left - 27,
                top: newPos.top - 21
            } );
            self.btn.filter( '.ares-galery-popup__prev').css( { left: newPos.left + 27 } );
            self.btn.filter( '.ares-galery-popup__next' ).css( { right: newPos.left + 27 } );

            self.popap.fadeIn( 300 );
        },
        loadGallery: function(){
            var self = this,
                elems = self.elems,
                resultString = '<div class="ares-galery-popup"><div class="ares-galery-popup__layout">';

            elems.items.each( function() {
                resultString+='<div class="ares-galery-popup__wraper"><div><img src="' + $( this).attr( 'href' ) + '">\
                    </div><span>' + $( this).attr( 'title' ) + '<u class="after"></u><u class="before"></u></span></div>';
            } );
            resultString+='<div class="ares-galery-popup__close"></div><div class="ares-galery-popup__prev ares-galery-popup__btn"></div><div class="ares-galery-popup__next ares-galery-popup__btn"></div></div></div>';

            $( 'body' ).prepend(resultString);

            self.popap = $( '.ares-galery-popup' );
            self.popap.find( 'span' ).each( function(){
                $( this ).css( { left: ( $( this ).parents().width() - $( this ).width() )/2 } );
            } );
            self.popap.find( 'img' ).each( function(){
                $( this ).load( function(){
                    $( this ).css( { top: (568-this.height)/2, left:(878-this.width)/2 } );
                } );
            } );
            self.btn = this.popap.find( '.ares-galery-popup__btn' );
            self.close = this.popap.find( '.ares-galery-popup__close' );
            self.wraps = this.popap.find( '.ares-galery-popup__wraper' );

            if( self.wraps.length == 1 ) {
                self.btn.remove();
            }

            self.popap.css( { display: 'none' } );
            self.wraps.css( { display: 'none' } );

        }
    };
/*
    Gallery
*/
/*
 IE Class
 */
var IE = function (){
    this.ie = $.browser.msie;
    this.ieV = $.browser.version;
    this.ltie7 = this.ie&&(this.ieV <= 7);
    this.ltie8 = this.ie&&(this.ieV <= 8);
}
/*
 //IE Class
 */
