$(function(){
    $('.container_wrap, .second_menu').hover(function(){
        $(this).children('ul').css('display', 'block');
    });
    $('.container_wrap, .second_menu').mouseleave(function(){
        $(this).children('ul').css('display', 'none');
    })
} );