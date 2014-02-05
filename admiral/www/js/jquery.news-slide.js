$(function(){

    //  инициализация маленькой галереи
    loadLightBox( $( '.news__gall__miniGallWrap .preview li' ).eq(0).addClass('active')  );

    $(".preview li").on("click", function(){
        $(".preview li").removeClass('active');
        $(this).addClass('active');
        loadLightBox( $( this) );
        return false;
    } );

});

// загрузка лайтбокс
var loadLightBox = function(obj){
    var srcAttr = obj.children().children().attr('src'),
        hrefAttr = obj.children().attr('href');
        hrefData = obj.children().attr('data-lightbox');

    $( '.news__gall__imgBigWrap a' ).remove();
    $( '.news__gall__imgBigWrap' ).prepend( '<a data-lightbox="'+ hrefData +'" href="'+ hrefAttr +'"><img src="'+ srcAttr +'"  height="306" width="475" alt=""></a>' );
};