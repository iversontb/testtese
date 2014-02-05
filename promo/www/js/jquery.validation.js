$(function(){

    new Valid( $( '.site__form > form' ) );
});

var Valid = function( obj ){
    this.obj = obj;
    this.input = this.obj.find( 'input[type="text"]' );

    this.init();
};
    Valid.prototype = {
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


                    self.core.controls();
                },
                controls: function(){
                    self.obj.on( {
                        'submit': function(){
                            return self.core.validate();
                        }
                    } );
                    self.input.on( {
                        'focus': function(){
                            $( this ).removeClass( 'err' );
                        }
                    } );
                },
                validate: function(){
                    var prov = true;

                    self.input.each( function(){
                        var curItem = $( this );

                        if( curItem.val() == '' ){
                            curItem.addClass( 'err' );
                            prov = false;
                        }
                    } );


                    if( !( /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/i.test( self.input.eq( 2 ).val() ) ) ){
                        self.input.eq( 2 ).addClass( 'err' );
                        prov = false;
                    }

                    return prov;
                }
            };
        },
        slideTo: function( index ) {
            var self = this,
                elems = self.elems,
                activeIndex = elems.points.filter( '.active' ).index(),
                direction,
                curW = 100,
                activeItem = elems.items.eq( activeIndex ),
                activePoint = elems.points.eq( activeIndex ),
                newItem = elems.items.eq( index),
                newPoint = elems.points.eq( index );

            clearTimeout( self.timer );
            if( !self.action ){
                self.action = true;

                if( activeIndex < index ){
                    direction = 1;
                } else {
                    direction = -1;
                }

                if( activeIndex == 0 && index == ( elems.points.length - 1 ) ){
                    direction = -1;
                } else if ( activeIndex == ( elems.points.length - 1 )  && index == 0 ){
                    direction = 1;
                }

                activePoint.removeClass( 'active' );
                newPoint.addClass( 'active' );

                newItem.css( {
                    display: 'block',
                    left: curW * -direction,
                    opacity: 0
                } );
                activeItem.animate( {
                    left: curW * direction,
                    opacity: 0
                }, 300, function() {
                    $( this ).css( { display: 'none' } );
                    self.action = false;
                    self.core.slideToNext();
                } );
                newItem.animate( {
                    left: 0,
                    opacity: 1
                }, 300 );
            }

        }
    };