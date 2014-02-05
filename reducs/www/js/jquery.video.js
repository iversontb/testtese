$(function(){

    var videoHeight = $('.tabs_gall').width() * 0.8;
    $('.videoBlock').height( videoHeight );

    $(window).resize(function(){
        var videoHeight = $('.tabs_gall').width() * 0.8;
        $('.videoBlock').height( videoHeight );
    });


});