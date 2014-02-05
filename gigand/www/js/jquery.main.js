$(function(){

    $(".info_nav li").click(function(){
        var index = $(this).index();
        $(".info_nav li").removeClass("current");
        $(this).addClass("current");
        $(".info").stop(false,false).hide();
        $(".info:eq("+index+")").stop(false,false).show();
    });

    $('.server .link').click(function(){
        $(this).html('<span>1</span> сервер');
        $(this).parents('.server').addClass('active');
        $('.qty_up, .qty_down').fadeIn();
        return false;
    })
} );