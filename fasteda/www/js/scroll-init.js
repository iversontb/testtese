

function initCustomScrollbar(){
    $('.scroll-standard').scrollbar();

    $('.scroll-simple').scrollbar({
    "type": "simple"
    });

$('.external-scroll').scrollbar({
    "autoScrollSize": false,
    "scrollx": $('.external-scroll_x'),
    "scrolly": $('.external-scroll_y')
    });

}

function destroyCustomScrollbar(){
    $('.scroll-content').scrollbar('destroy');
    }

$(document).ready(function(){
    initCustomScrollbar();



});
