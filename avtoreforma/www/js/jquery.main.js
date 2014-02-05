$(function(){

    $('.menu_main > ul').on('mouseover', '> li', function(){
        $('.menu_main > ul > li > a').removeClass('active');
        $(this).children().addClass('active');
       $(this).children().next().stop().slideDown(300);
    });

    $('.menu_main > ul').on('mouseleave', '> li', function(){
        $('.menu_main > ul > li > a').removeClass('active');
        $(this).children().next().css({'display':'none'});
    });

} )