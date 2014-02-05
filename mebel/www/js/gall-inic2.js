$(function(){
    // инициализация маленькой галереи
    loadLightBox( $( '.miniGallWrap .preview li a' ).eq(0)  );

    $( '.miniGallWrap .preview a' ).live( 'click', function() {
        loadLightBox( $( this ) );
        return false;
    } );

    $('.cloud-zoom').CloudZoom();


});


// загрузка лайтбокс
var loadLightBox = function(obj){

    var srcAttr = obj.children().attr('src'),
        hrefAttr = obj.attr('href');

    $( '.imgBigWrap a' ).remove();
    $( '.imgBigWrap' ).append( '<a href="'+ hrefAttr +'" rel="" class="cloud-zoom"><img src="'+ srcAttr +'" height="423"  width="199" alt=""></a>' );

    $('.cloud-zoom').CloudZoom();

};

