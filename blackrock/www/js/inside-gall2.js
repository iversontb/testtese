$(function(){



    $( '.gorizontalPreview .gallery' ).jCarouselLite({
        btnNext: ".next",
        btnPrev: ".prev",
        visible: 4,
        vertical: false,
        mouseWheel: true
    });



    // инициализация маленькой галереи
    loadLightBox( $( '.miniGallWrap .preview li a' ).eq(0)  );

    $( '.miniGallWrap .preview' ).on( 'click', 'li a', function() {
        loadLightBox( $( this ) );
        $('.littlGall LI a').removeClass('active')
        $(this).addClass('active');
        return false;
    } );


    function showNext(){
        var nextIndex =  $( '.littlGall LI .active').parent().index()+1;
        if($( '.littlGall LI').length==nextIndex){
            nextIndex = 0;
        }
        var nextElem = $( '.littlGall LI').eq(nextIndex).find('a');
            nextElem.trigger('click');

    };

    $('.openObject').on('click', '.imgBigWrap', function(){
        showNext();
    });



} );


// загрузка лайтбокс
var loadLightBox = function(obj){

    var srcAttr = obj.children().children().attr('src'),
        hrefAttr = obj.attr('href');

    $( '.imgBigWrap div' ).remove();
    $( '.imgBigWrap' ).append( '<div><img src="'+ srcAttr +'"  height="403" width="611" alt=""></div>' );


};