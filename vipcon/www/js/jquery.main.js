$(function(){

    $(".leftMessageBut").click( function () {
            if ($(this).next().css('display')=="none"){
                $(this).next().slideDown(300);
            }
            else {$(this).next().slideUp(300);}
            return false;
    });

    $('.main-menu__layout li').hover(
        function () {
            $(this).children().next().slideDown();
        },
        function () {
            $(this).children().next().css({'display':'none'});
        }
    );








} );