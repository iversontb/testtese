$(function(){

    $(".main-menu__item_active .main-menu__lnk").append('<div class="corner-top-left"></div><div class="corner-bottom-left"></div><div class="corner-top-right"></div><div class="corner-bottom-right"></div>');


    $(".gallery").jCarouselLite({
        btnNext: ".next",
        btnPrev: ".prev",
        visible: 1,
        speed: 700,
        auto: 5000
    });


    // инициализация маленькой галереи
    loadLightBox( $( '.miniGallWrap .preview li a' ).eq(0)  );

    $( '.miniGallWrap .preview' ).on( 'click', 'li a', function() {
        loadLightBox( $( this ) );
        return false;
    } );



});


// загрузка лайтбокс
var loadLightBox = function(obj){

    var srcAttr = obj.children().attr('src'),
        hrefAttr = obj.attr('href');

    $( '.imgBigWrap a' ).remove();
    $( '.imgBigWrap' ).append( '<a href="'+ hrefAttr +'"><img src="'+ srcAttr +'"  height="380" width="380" alt=""></a>' );

    $( '.imgBigWrap a' ).lightBox( {
        txtImage: 'Изображение',
        txtOf: 'из'
    } );

};