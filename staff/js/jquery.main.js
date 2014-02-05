$(function(){
//    инициализация бокового меню
//    $('.main-menu__layout > li > span').click(function(){
//        if ($(this).hasClass('active')) {
//            $(this).removeClass('active').next('ol').slideUp();
//        } else {
//            $('.main-menu__layout > li > span').removeClass('active').next('ol').slideUp();
//            $(this).addClass('active').next('ol').slideDown();
//        }
//    });

    $('.main-menu__layout > li').filter(':even').css('background', '#d87b02');
    $('.main-menu__layout ol li').filter(':even').css('background', '#e8c89d');
    $('.services li').filter(':even').css('background', '#dbdbdb');

} );