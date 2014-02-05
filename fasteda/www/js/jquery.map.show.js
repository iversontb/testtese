$(function(){




    var windowHeight = $(window).height(),
        mapHeight = $('.mapContainer').height(windowHeight - 80);
    $('.tableWrap').css({'height': mapHeight.height() - 80});



    $(window).resize( function(){

        var windowHeight = $(window).height(),
            mapHeight = $('.mapContainer').height(windowHeight - 80);
        $('.tableWrap').css({'height': mapHeight.height() - 80});

    });




    $('body').click( function(){
        if($('.mapContainer').css('display')=='block'){
            $('.mapContainer').css({'display':'none'});
        }
    });

    $('.mapPlace > span').click( function(){
        var elem = $(this);
        setTimeout( function(){
            elem.parent().find('.mapContainer').fadeIn();
        },10);

    });

    $('.mapContainer').on( { 'click': function(event){
        event = event || window.event // кросс-браузерно

        if (event.stopPropagation) {
            // Вариант стандарта W3C:
            event.stopPropagation()
        } else {
            // Вариант Internet Explorer:
            event.cancelBubble = true
        }
    } } );

});