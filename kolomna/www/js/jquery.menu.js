$(function(){

    $(window).scroll(function() {
        scrollElem = (window.scrollY==undefined)?document.documentElement.scrollTop:window.scrollY;
        if( scrollElem > 60 ){
            $('.header').removeClass('headBlack').addClass('headWhite');

        }
        else if( scrollElem < 60 ){
            $('.header').removeClass('headWhite').addClass('headBlack');
        }
    });



} );