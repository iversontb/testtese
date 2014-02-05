$( window ).load( function(){

    $('.slideBlock').css({'display':'none'});

    $('.slideBut').click( function(){

        if ($(this).parents('.interestingPlace').find('.slideBlock').css('display')=="none"){
            $(this).removeClass('downArrow').addClass('upArrow').text('Свернуть');
            $(this).parents('.interestingPlace').find('.slideBlock').slideDown();
        }
        else {
            $(this).removeClass('downArrow').addClass('downArrow').text('Развернуть');
            $(this).parents('.interestingPlace').find('.slideBlock').slideUp();
        }

        return false;
    });

});