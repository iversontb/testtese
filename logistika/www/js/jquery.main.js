$(function(){

    $(window).load( function(){
        $('.slideWrap').height($('.ares-slider2__item').height());
        $('.news_line').height($('.ares-slider2__item').height()/3 - 38.7);

    });

    $(window).resize( function(){
        $('.slideWrap').height($('.ares-slider2__item').height());
        $('.news_line').height($('.ares-slider2__item').height()/3 -38.7);
    });




} );