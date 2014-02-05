$(function(){

    //    появление попапа
    $('.wrap_popup').fadeIn(300);

    //  закрытие попапов
    $('.wrap_popup .close_popup').click(function(){
        $('.wrap_popup').fadeOut();
    });

});