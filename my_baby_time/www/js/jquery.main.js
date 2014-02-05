$(function(){

    $('.site__aside__menu > span').click( function(){
        if($(this).next().css('display')=="none"){
            $(this).next().slideDown();
        }
        else{
            $(this).next().slideUp();
        }
    });

} );