$(function(){

    $('.calcBut').click( function(){
       $('.doneCalc').fadeIn();
        return false;
    });

    $('.orderBut').click( function(){
        $('.popup').fadeIn();
        return false;
    });

    $('.backpop').click( function(){
        $('.popup').fadeOut();
        return false;
    });
    $(window).scroll(function() {
        scrollElem = (window.scrollY==undefined)?document.documentElement.scrollTop:window.scrollY;
        if( scrollElem >= 240 ){

            leftElem = $('.site').offset().left;



            $( '.insede .calculator' ).css( {
                'position' : 'fixed',
                'top': '15px',
                'left':leftElem+18,

            } );
            $('.siteContant').css({'margin-left':'307px'});

        }
        else{
            $( '.insede .calculator' ).css( {
                'position' : 'relative',
                'top':'0',
                'left': '0'

            } );
            $('.siteContant').css({'margin-left':'0'});

        }
    });

} );