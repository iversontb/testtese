$(function(){


    $( '.textBlock' ).css({ 'display': 'none' });
    $( '.textBlock.first' ).css({ 'display': 'block' });

    new BigGallery( $( '.gallConteiner' ) );


    // работа табов
    $( '.content .aboutBlock li a' ).click(
        function () {

            if(!isMove){

                $( '.content .aboutBlock li a' ).removeClass('active');
                $(this).addClass('active');
                var _id = $( this ).attr( 'id' ),
                    _this=$( '.textBlock ' ).eq(_id);
                $( '.textBlock' ).css({ 'display': 'none' });
                _this.fadeIn();
                clearTimeout(timer);
                showNext();
            }
            return false;
        }
    );

    var isMove = false;
    $('.textBlock').mouseover( function(){
        clearTimeout(timer);
        isMove = true;
    });

    $('.textBlock').mouseleave( function(){
        isMove = false;
        showNext();
    });

    var timer;
    showNext();
    function showNext(){
        var nextIndex =  $( '.content .aboutBlock li .active').parent().index()+1;
        if($( '.content .aboutBlock li').length==nextIndex){
            nextIndex = 0;
        }
        var nextElem = $( '.content .aboutBlock li').eq(nextIndex).find('a');
        timer = setTimeout( function(){
            nextElem.trigger('click');
        }, 5000);
    };

    jQuery(function(){
        jQuery(".gallery").jCarouselLite({
            btnNext: ".next",
            btnPrev: ".prev",
            visible: 6,
            auto: 5000
        });
    });




} );

var BigGallery = function( obj ){
    this.obj = obj;
    this.elems = {
        items: this.obj.find( 'a' )
    };
    this.action = false;
    this.hover = false;

    this.init();
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

                    self.buttons.on( 'click', function(){
                        var curElem = $( this );

                        if( !curElem.hasClass( 'active' ) ) {
                            if( self.hover ){
                                self.action = false;
                            }
                            self.slideTo( curElem.index() );
                        }
                    } );

                    self.obj.on('mouseover', function(){
                        self.action = true;
                        self.hover = true;
                    } );
                    self.obj.on('mousemove', function(){
                        self.action = true;
                    } );
                    self.obj.on('mouseleave', function(){
                        self.action = false;
                        self.hover = false;
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

                        self.core.nextItem();

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

                curLnk.fadeIn( 300 );
                activeLnk.fadeOut( 300, function(){
                    self.action = false;
                    self.core.nextItem();
                } );
            }

        }
    };
