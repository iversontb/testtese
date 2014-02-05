$(function(){

    $(function(){
        $( '.gallery' ).jCarouselLite({
            btnNext: ".next",
            btnPrev: ".prev",
            visible: 4
        });
    });




    // инициализация маленькой галереи
    loadLightBox( $( '.miniGallWrap .preview li a' ).eq(0)  );
    $(".preview li a").live("click", function(){
        loadLightBox( $( this ) );
        return false;
    } );

} );


// загрузка лайтбокс
var loadLightBox = function(obj){

    var srcAttr = obj.children().attr('src'),
        hrefAttr = obj.attr('href');

    $( '.imgBigWrap a' ).remove();
    $( '.imgBigWrap' ).append( '<a href="'+ hrefAttr +'" rel="lightbox[roadtrip]"><img src="'+ srcAttr +'"  height="346" width="530" alt=""></a>' );

//    $( '.imgBigWrap a' ).lightBox( {
//        txtImage: 'Изображение',
//        txtOf: 'из'
//    } );

};