$(function(){

    var siteHeight = $('.site').height();
    $('.popup').height(siteHeight+37);

    $('.agree').click( function(){
        $('.popup').fadeIn();
        $('html, body').animate({scrollTop:0}, 'slow');
        return false;
    });

    $('.popup .closeBut, .popup .closeDoc, .popupBack').click( function(){

        $('.popup').fadeOut();
        return false;

    });

} );