$(function(){

    $('.phone ').on('click', '.order_call' , function(){
       $('.pop_up').fadeIn();
    });

    $('.pop_up ').on('click', '.close' , function(){
        $('.pop_up').fadeOut();
    });

    new Feedback();
} );

var Feedback = function(){
    this.obj = $( '#feedback' );
    this.request = new XMLHttpRequest();

    this.init();
};
Feedback.prototype = {
    init: function(){
        var self = this;

        self.core = self.core();
        self.core.controls();
    },
    core: function(){
        var self = this;

        return {
            controls: function(){
                self.obj.on( {
                    'submit': function(){
                        self.sendLetter();

                        return false;
                    }
                } );
            }
        };
    },
    sendLetter: function(){
        var self = this;

        self.request.abort();
        self.request = $.ajax({//данные для аякс запроса
            url: self.obj.attr( 'action' ),
            data: self.obj.serialize(),
            dataType: 'html', // определяем тип получаемых данных
            timeout: 20000,
            type: "GET",
            success: function( msg ){

                $( '.pop_up').fadeOut();

                alert('С вами свяжуться в ближайшее время');


            },
            error: function( msg ){

                alert('Произошла ошибка, попробуйте в другой раз');

            }
        });
    }
};