function fullScreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    }
}

$(function(){

    var params = {
        speed: 30000, // время прокрутки титров
        moveElement: $('.titres'), // элемент обретка титров
        textCenter: false // центровка текста

    };


    $('.fullScriin').click(function (event) {
        var html = document.documentElement;
        fullScreen(html);
        return false

    });


    $(window).resize(function(){
        titres(params);
    });
    titres(params);


});



function titres(params){
    var compleat =  params.onComplete || function(){};
    var startPos = $(window).height(),
        stopPos = params.moveElement.height();

    params.moveElement.css({'top':startPos});
    params.moveElement.animate({
        top: -stopPos
    }, params.speed, function() {

        compleat();
    });
    if(params.textCenter == true){
        params.moveElement.css({'text-align':'center'});
    }


}