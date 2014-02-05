$(function(){

    $(".slideList span").click(
        function () {
            if ($(this).next().css('display')=="none"){
                $(this).next().slideDown(300);
            }
            else {
                $(this).next().slideUp(300);
            }
    });

    new Validattor( $( '.dataLeave' ) );


} );

var Validattor = function( obj ){
    this.obj = obj;
    this.input = this.obj.find( '.dataLeave__input' );

    this.init();
};
    Validattor.prototype = {
        init: function(){
            var self = this;

            self.core = self.core();
            self.core.controls();
        },
        core: function(){
            var self = this;

            return {
               controls: function(){
                   self.input.on( {
                       'focus': function(){
                           $( this).removeClass( 'err' );
                       }
                   } );
                    self.obj.on( {
                        'submit': function(){
                            var prov = false;

                            if( self.input.eq( 0 ).val() == '' ){
                                self.input.eq( 0 ).addClass( 'err' );
                                prov = true;
                            }

                            if( self.input.eq( 1 ).val() == '' || !( /^[0-9]+$/i.test(self.input.eq( 1 ).val()) ) ){
                                self.input.eq( 1 ).addClass( 'err' );
                                prov = true;
                            }
                            if( self.input.eq( 2 ).val() == '' || !( /^[0-9]+$/i.test(self.input.eq( 2 ).val()) ) ){
                                self.input.eq( 2 ).addClass( 'err' );
                                prov = true;
                            }

                            if( prov ){
                                return false;
                            }
                        }
                    } );
               }
            };
        }
    };