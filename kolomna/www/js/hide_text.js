$(function(){

    $(".eventText").each(function (i) {

        $(this).find('p').each(function (e) {
            if (e >= 1){
                $(this).css({'display':'none'});
            }

        });

    });

    $('.moreText').on('click', function(){
       $(this).parent().find('p').each(function (e) {
           if (e >= 1){

               $(this).fadeIn();
           }

       });

        $(this).css({'display':'none'});
        $(this).next().css({'display':'inline-block'});
        return false;
    });

    $('.hideBlock').on('click', function(){
        $(this).parent().find('p').each(function (e) {
            if (e >= 1){

                $(this).fadeOut();
            }

        });

        $(this).css({'display':'none'});
        $(this).prev().css({'display':'inline-block'});
        return false;
    });




});
