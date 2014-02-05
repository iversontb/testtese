$(function(){


    $(".gallery").jCarouselLite({
        btnNext: ".next",
        btnPrev: ".prev",
        visible: 3
    });

    //  инициализация маленькой галереи
    loadLightBox( $( '.preview li' ).eq(0)  );
    $(".preview li").on("click", function(){
        loadLightBox( $( this) );
        return false;
    } );




});

// загрузка лайтбокс
var loadLightBox = function(obj){

    var srcAttr = obj.children().children().attr('src'),
        hrefAttr = obj.children().attr('href');
    descript = obj.find('span').html();


    $( '.imgBigWrap a' ).remove();
    $( '.imgBigWrap' ).prepend( '<a href="'+ hrefAttr +'"><img src="'+ srcAttr +'"   width="283" height="283" alt=""></a>' );


    $( '.imgBigWrap a' ).lightBox( {
        txtImage: 'Изображение',
        txtOf: 'из'
    } );


};