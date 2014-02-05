$(function(){

    $(".news__gall__gallery").jCarouselLite({
        btnNext: ".next",
        btnPrev: ".prev",
        visible: 1
    });



    //  инициализация маленькой галереи
    loadLightBox( $( '.news__gall__miniGallWrap .preview li a' ).eq(0)  );
    $(".preview li a").live("click", function(){
        loadLightBox( $( this) );
        return false;
    } );




});

// загрузка лайтбокс
var loadLightBox = function(obj){

    var srcAttr = obj.children().attr('src'),
        hrefAttr = obj.attr('href');


    $( '.news__gall__imgBigWrap a' ).remove();
    $( '.news__gall__imgBigWrap' ).prepend( '<a href="'+ hrefAttr +'"><img src="'+ srcAttr +'"  height="234" width="350" alt=""></a>' );


    $( '.news__gall__imgBigWrap a' ).lightBox( {
        txtImage: 'Изображение',
        txtOf: 'из'
    } );


};