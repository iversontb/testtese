$(function(){

    $(".itimsMenu > ol > li").hover(
        function () {
            $(this).children().next().slideDown(300);
        },
        function () {
            $(this).children().next().css( {'display':'none'} );
        }
    );

//    $(function(){
//        $( '.gallery' ).jCarouselLite({
//            btnNext: ".next",
//            btnPrev: ".prev",
//            visible: 4
//        });
//    });


    // инициализация маленькой галереи
    loadLightBox( $( '.miniGallWrap .preview li a' ).eq(0)  );

    $( '.miniGallWrap .preview' ).on( 'click', 'li a', function() {
        loadLightBox( $( this ) );
        return false;
    } );


} );


// загрузка лайтбокс
var loadLightBox = function(obj){

    var srcAttr = obj.children().attr('src'),
        hrefAttr = obj.attr('href'),
        titleEl = obj.children().attr('title'),
        altEl = obj.children().attr('alt');

    $( '.imgBigWrap a' ).remove();
    $( '.imgBigWrap' ).append( '<a href="'+ hrefAttr +'" rel=""><img src="'+ srcAttr +'" title="'+ titleEl +'" alt="'+altEl+'"   height="100%" alt=""></a>' );

    $( '.imgBigWrap a' ).lightBox( {
        txtImage: 'Изображение',
        txtOf: 'из'
    } );

};