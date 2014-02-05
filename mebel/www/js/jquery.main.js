$(function(){



    $('.close').click( function(){
        $('.wholesale').fadeOut();
        $('.colorPop').fadeOut();
        $('.callTaket').fadeOut();
        return false;
    });

    $('.closeDiscount').click( function(){
        $('.discount').slideUp();
    });

    $('.opt').click( function(){
        $('.wholesale').fadeIn();
        return false;
    });

//    $('.selectBlock').click( function(){
//        $('.colorPop').fadeIn();
//        return false;
//    });

    $('.mainAccard > li:first-child > span').css({'display':'none'});
    $('.mainAccard > li:first-child .subMenuWrap').css({'display':'block'});

    // аккрадион на главной
    $('.mainAccard >li > span').click( function(){
        $('.mainAccard >li > span').slideDown();
        $('.subMenuWrap').slideUp();
        $(this).slideUp();
        $(this).next().slideDown();
        return false;
    });





    $('.callOrder').click( function(){
        $('.callTaket').fadeIn();
        return false;
    });

    $('.buyButton').live('click', function(){
    })


});

