var rombs = [];
$(function(){



    new BigGallery( $( '.gallConteiner' ) );


//    // работа табов
//    $( '.content .aboutBlock li a' ).click(
//        function () {
//
//            if(!isMove){
//
//                $( '.content .aboutBlock li a' ).removeClass('active');
//                $(this).addClass('active');
//                var _id = $( this ).attr( 'id' ),
//                    _this=$( '.textBlock ' ).eq(_id);
//                $( '.textBlock' ).css({ 'display': 'none' });
//                _this.fadeIn();
//                clearTimeout(timer);
//                showNext();
//            }
//            return false;
//        }
//    );

    $( '.content .aboutBlock li').each( function( i ){
        if( i == 0 ){
            rombs[ i ] = new Romb ( $( this ), 6 );
        } else {
            rombs[ i ] = new Romb ( $( this ), 0 );
        }
    } );

    var timer;
    var showNext = function(){
        var items = $( '.content .aboutBlock li' ),
            nextIndex =  items.filter('.active').index() + 1,
            nextElem;

        if( items.length == nextIndex ){
            nextIndex = 0;
        }
        nextElem = items.eq( nextIndex ).find('a');
        timer = setTimeout( function(){
            nextElem.trigger('mouseover');
            showNext();
        }, 5000);
    };
    showNext();

    $('.aboutWork').on( {
        mouseover: function(){
            clearTimeout(timer);
        },
        mouseleave: function(){
            showNext();
        }
    } );

    jQuery(function(){
        jQuery(".gallery").jCarouselLite({
            btnNext: ".next",
            btnPrev: ".prev",
            visible: 6,
            auto: 5000
        });
    });

    $( '.gallery' ).on( 'click', 'a', function(){
        new LargeGallery( $( this).attr( 'data-id' ), $( '.gallery' ).attr( 'data-php' ) );
        return false;
    } );
} );

var Romb = function( obj, start){
    this.obj = obj;
    this.position = start;
    this.direction = start;
    this.text = $('.textBlock').eq(this.obj.index());

    this.init();
};
Romb.prototype = {
    init: function(){
        var self = this;

        self.core = self.core();

        self.core.startView();
        self.core.controls();
    },
    core: function(){
        var self = this;

        return {
            controls: function(){
                self.obj.find('a').on( 'mouseover', function(){
                    if( !$( this ).parent().hasClass( 'active' ) ) self.push();
                    return false;
                } );
            },
            startView: function(){
                self.obj.css( { backgroundPosition: -( 240 * self.position ) + 'px 0' } );
                if( self.obj.hasClass( 'active' ) ) self.text.css( {display: 'block'} );
            }
        };
    },
    push: function(){
        var self = this,
            from = self.position,
            duration = 300,
            start = new Date().getTime(), to;

        clearTimeout( self.timer );
        self.text.stop( false, false );
        if( self.direction ){
            self.direction = 0;
            self.obj.removeClass('active');
            duration = duration * ( from / 6 );
            self.text.css( {display: 'none'} );
        } else {
            rombs[ $( '.content .aboutBlock li.active').index() ].push();

            self.direction = 6;
            self.obj.addClass('active');
            duration = duration * ( 1 - ( from / 6 ) );
            self.text.fadeIn( 300 );
        }
        to = self.direction;


        self.timer = setTimeout( function(){
            var now = (new Date().getTime()) - start,
                progress = now / duration;

            self.position = Math.round( (to - from) * progress + from );

            self.obj.css( { backgroundPosition: -( 240 * self.position ) + 'px 0' } );

            if (progress < 1)
                self.timer = setTimeout(arguments.callee, 10);

        }, 10 );
    }
};

var BigGallery = function( obj ){
    this.obj = obj;
    this.elems = {
        items: this.obj.find( 'a' )
    };
    this.action = false;
    this.hover = false;

    if( this.elems.items.length > 1 ){
        this.init();
    }
};
BigGallery.prototype = {
    init: function(){
        var self = this;

        self.core = self.core();

        self.core.startView();
        self.core.controls();
    },
    core: function(){
        var self = this,
            items = self.elems.items,
            count = items.length;

        return {
            controls: function(){

                self.buttons.on( 'mouseover', function(){
                    var curElem = $( this );

                    if( !curElem.hasClass( 'active' ) ) {
                        if( self.hover ){
                            self.action = false;
                        }
                        self.slideTo( curElem.index() );
                    }
                } );

                self.obj.on({
                    mouseover: function(){
                        self.action = true;
                        self.hover = true;
                    },
                    mousemove: function(){
                        self.action = true;
                    },
                    mouseleave: function(){
                        self.action = false;
                        self.hover = false;
                    }
                } );
            },
            startView: function(){
                var parent;

                parent = $( '<ul class="gal-btn"></ul>' );

                items.each( function( i ){
                    var curElem = $( this );

                    if( i ) {
                        curElem.css( { display: 'none' } );
                        parent.append( '<li></li>' );
                    } else {
                        parent.append( '<li class="active"></li>' );
                    }
                } );
                self.obj.append( parent );

                self.buttons = parent.find( 'li' );

                self.core.nextItem();
            },
            nextItem: function(){
                self.timer = setTimeout( function(){
                    var nextItem = self.buttons.filter( '.active').index() + 1;

                    if( nextItem == count ) nextItem = 0;

                    self.slideTo( nextItem );
                },3000 );
            }
        };
    },
    slideTo: function( index ){
        var self = this,
            items = self.elems.items,
            curBtn = self.buttons.eq( index ),
            activeBtn = self.buttons.filter( '.active' ),
            curLnk = items.eq( index ),
            activeLnk = items.eq( activeBtn.index() );

        if( !self.action ){
            clearTimeout( self.timer );

            self.action = true;

            activeBtn.removeClass( 'active' );
            curBtn.addClass( 'active' );

            curLnk.css({zIndex:1});
            activeLnk.css({zIndex:2});

            curLnk.fadeIn( 300 );
            activeLnk.fadeOut( 300, function(){
                self.action = false;
                self.core.nextItem();
            } );
        }

    }
};
var LargeGallery = function( id, src ) {
    this.id = id;
    this.obj = $( '<div class="large-gallery"></div>' );
    this.request = new XMLHttpRequest();
    this.site = $( '.site' );
    this.action = false;
    this.src = src;

    this.init();
};
LargeGallery.prototype = {
    init: function(){
        var self = this;

        self.core = self.core();
        self.core.create();
        self.core.controls();
    },
    core: function(){
        var self = this;

        return {
            controls: function(){

                self.obj.on( 'click', '.gallery-inner a', function(){
                    self.show( $( this ).attr( 'href' ) );
                    return false;
                } );

                self.obj.on( 'click', '.large-close', function(){
                    self.hide();
                } );

            },
            create: function(){
                self.request.abort();

                self.site.css( { zIndex: 100 } );
                self.site.append( self.obj );

                self.obj.fadeIn( 300 );

                self.request =$.ajax( {
                    url: self.src, // from form attribute action
                    data: 'id=' + self.id, // form serialize
                    dataType: 'html',
                    timeout: 20000,
                    type: "GET",
                    success: function( msg ){
                        self.obj.append(msg);

                        $( 'body, html').animate( { scrollTop: 0 }, 300 );

                        var photo = self.obj.find('.gallery-inner li a');

                        photo.each( function(){
                            var temp = $( '<img src="' + $( this).attr( 'href' ) + '">' );
                        } );

                        self.obj.find( '.large-layout' ).append( '<div class="large-close"></div>' );

                        self.obj.find( '.gallery-wrap' ).before( '<div class="large-photo"></div>' );
                        self.obj.find( '.large-photo' ).append( '<img src="' + photo.eq( 0).attr( 'href' ) + '">' );

                        if( $( ".gallery-inner li").length > 5 ) {
                            $( ".gallery-inner" ).jCarouselLite( {
                                btnNext: ".next",
                                btnPrev: ".prev",
                                visible: 5
                            });
                        } else {
                            $('.gallery-wrap .prev, .gallery-wrap .next').css( {display: "none"} );
                        }
                    },
                    error: function(XMLHttpRequest){

                    }
                } );
            }
        };
    },
    show: function( img ){
        var img2 = $('.large-photo img'),
            img1 = $( '<img src="' + img + '">' );

        if( !self.action ){
            self.action = true;
            $('.large-photo').append( img1 );

            img1.css( {
                display: 'none'
            } );
            img2.css( {
                display: 'block'
            } );

            img1.fadeIn( 300 );
            img2.fadeOut( 300, function(){
                self.action = false;
                $( this).remove();
            } );
        }
    },
    hide: function(){
        var self = this;

        self.request.abort();

        self.obj.fadeOut( 300, function(){
            $(this).remove();
        } );
    }
};