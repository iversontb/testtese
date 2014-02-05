$(function(){

    var bsketTop = $('.basketBlock').offset().top,
        footerTop = $('.footer__layout').offset().top,
        contantWidth = $('.contentContainer').width(),
        basketHeight = $('.basketBlock').height();


    $(window).scroll(function() {

        basketHeight = $('.basketBlock').height();
        scrollElem = $(window).scrollTop();
        var bsketBottom = $('.basketBlock').offset().top + $('.basketBlock').height(),
            footerTop2 = $('.footer__layout').offset().top;


        if( scrollElem >= bsketTop-10 ){

            $( '.basketBlock' ).css( {
                'position' : 'fixed',
                'top': '10px',
                'left': contantWidth + 79

            } );

        }
        else  if( scrollElem < bsketTop ){

            $( '.basketBlock' ).css( {
                'position' : 'relative',
                'top':'0',
                'left': 'auto'

            } );

        }

        if ( ($('.site').height() - 369 - basketHeight ) <= scrollElem ){
            $('.basketBlock').css({
               'top':  ($('.site').height() - 400 - basketHeight ) - scrollElem
            });
        }
    });

} );