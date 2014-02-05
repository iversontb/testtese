$(function(){

    var lastPos = $('.lastPos').position().top,
        lastPos2 = $('.benefits .benefitsBlocks').eq(-1).offset().top,
        lastPos3 = $('.benefits').offset().top;

    $('.orangeLine').css({'height': lastPos});
    $('.orangeLine2').css({ bottom: $('.benefits').height() - ( lastPos2 - lastPos3 )-95 });



} );