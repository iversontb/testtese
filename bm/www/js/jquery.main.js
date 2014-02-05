$(function(){
    $('.main_menu a').click( function(){
        $('.main_menu a').removeClass('active');
        $(this).addClass('active');
    });
} );