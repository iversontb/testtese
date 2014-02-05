$(function(){


    $( '.gallWrap a, .sc_menu a' ).lightBox( {
        txtImage: 'Изображение',
        txtOf: 'из'
    } );



    $(".gallery").jCarouselLite({
        btnNext: ".next",
        btnPrev: ".prev",
        visible: 1,
        auto: 5000,
        speed: 500
    });

    //Get our elements for faster access and set overlay width
    var div = $('div.sc_menu'),
        ul = $('ul.sc_menu'),
        ulPadding = 15;

    //Get menu width
    var divWidth = div.width();

    //Remove scrollbars
    div.css({overflow: 'hidden'});

    //Find last image container
    var lastLi = ul.find('li:last-child');

    //When user move mouse over menu
    div.mousemove(function(e){
        //As images are loaded ul width increases,
        //so we recalculate it each time
        var ulWidth = lastLi[0].offsetLeft + lastLi.outerWidth() + ulPadding;
        var left = (e.pageX - div.offset().left) * (ulWidth-divWidth) / divWidth;
        div.scrollLeft(left);
    });



    // подключение янедкс карт
    ymaps.ready(init);
    var myMap;

    function init(){
        myMap = new ymaps.Map ("map", {
            center: [55.731576,37.621723],
            zoom: 15
        });

        myPlacemark = new ymaps.Placemark([55.731576,37.621723], {
            preset: 'twirl#greenIcon',
            hintContent: 'г. Москва м. Добрынинская ул. Большая Полянка д. 55, стр. 2'

        });

        myMap.geoObjects.add(myPlacemark);

    }



    var activeHeight = $('.content-wrap > .active').innerHeight();
    $('.content-wrap').height(activeHeight+50);


    var Page = 0;

    $('.main-menu__lnk').click( function(){




        var _id = $( this ).attr( 'id'),
            contentMove = $( '.contentMove ' ).eq(_id),
            contentPrev = $( '.contentMove ' ).eq(Page);
        Page = _id;

        $('.main-menu__lnk').parent().removeClass('main-menu__item_active');
        $(this).parent().addClass('main-menu__item_active');

        contentPrev.animate({
            left: -5000
        }, 1500, function(){
            contentPrev.css({'display':'none'});

        } );


        contentMove.css({'display':'block','left':5000});
        contentMove.animate({
            left: 0
        }, 1500 );

        var activeHeight = contentMove.innerHeight();
        $('.content-wrap').height(activeHeight+50);
        return false;
    });

} );