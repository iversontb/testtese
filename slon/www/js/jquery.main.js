$(function(){
    $('.mainMenu section').hover(function(){
        $('.mainMenu section nav').css('display', 'none');
        $(this).children('nav').stop().slideDown();
    });

    $('.mainMenu section').mouseleave(function(){
        $(this).children('nav').css('display', 'none');
    })
} );