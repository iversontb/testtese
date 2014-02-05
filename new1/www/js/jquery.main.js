$(function(){
    $(window).scroll(function() {
        scrollElem = (window.scrollY==undefined)?document.documentElement.scrollTop:window.scrollY;
        var leftElem = $('.header').offset().left;

        if( scrollElem >= 410 ){

            $( '.form_order' ).css( {
                'position' : 'fixed',
                'top': '0',
                'left':leftElem+739+'px'

            } );

        }
        else{
            $( '.form_order' ).css( {
                'position' : 'absolute',
                'top':'0',
                'left': 739+'px'

            } );

        }
    });
} );