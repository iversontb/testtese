$( function(){
    new Cart( $( '.cart' ) );
} );
var Cart = function( obj ){
    this.obj = obj;
    this.delete = this.obj.find( '.delete' );
    this.popup = this.obj.find( '.cart__popup' );
    this.popupCancel = this.obj.find( '.cart__popup-cancel' );
    this.count = this.obj.find( '.plus-minus input[type="text"]' );
    this.price = this.obj.find( '.price' );
    this.reset = this.obj.find( '.reset_basket' );

    this.init();
};
    Cart.prototype = {
        init: function(){
            var self = this;

            self.core = self.core();
            self.core.build();
        },
        core: function(){
            var self = this;

            return {
                build: function(){
                    self.core.controls();
                },
                controls: function(){
                    self.delete.on( {
                        'click': function(){
                            if( self.obj.find( '.delete' ).length == 1 ){
                                self.reset.trigger( 'click' );
                                return false;
                            }
                            $( this ).parents( 'tr' ).remove();
                            self.core.recalculate();
                        }
                    } );
                    self.reset.on( {
                        'click': function(){
                            self.core.showPopup();
                            return false;
                        }
                    } );
                    self.count.on( {
                        'change': function(){
                            self.core.recalculate();
                        }
                    } );
                    self.popupCancel.on( {
                        'click': function(){
                            self.popup.fadeOut( 300 );
                            return false;
                        }
                    } );
                },
                showPopup:function(){
                    self.popup.fadeIn( 300 );
                },
                recalculate: function(){
                    var summ = 0,
                        counter = 0;

                    self.obj.find( '.plus-minus input[type="text"]' ).each( function(i){
                        var curItem = $( this );

                        counter += parseInt( curItem.val() );

                        summ += curItem.val() * parseInt( curItem.parents( 'td' ).next().find( '.price').text() );
                    } );

                    self.obj.find( '.total_amount').text( summ + ' Р' );
                    self.obj.find( '.all' ).text( counter );

                }
            };
        }
    };