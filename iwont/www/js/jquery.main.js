$(function(){

//    $('.authorization, .process_request').blurjs({
//        source: 'body',
//        radius: 7,
//        overlay: 'rgba(255,255,255,0.4)'
//    });

    $('.want_red, .want_blue, .want_yellow').click(function(){
        $('.wrap_popup').fadeIn();
        return false;
    });

    $('.close, .wrap_process_request button').click(function(){
        $('.wrap_popup').fadeOut();
    });
} );