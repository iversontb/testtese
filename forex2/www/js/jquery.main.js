$(function(){

    $(".main-menu__item").hover(
        function () {
            $(this).children('.main-menu__lnk').css({'background':'url(img/menu-active.png)'});
            $(this).children().next().slideDown(300);
        },
        function () {
            $(this).children().next().css({'display':'none'});
            $(this).children('.main-menu__lnk').css({'background':'none'});
            $('.main-menu__layout > li > a.active').css({'background':'url(img/menu-active.png)'});
        }
    );




} );