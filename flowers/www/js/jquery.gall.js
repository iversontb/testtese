$(function(){



    //  инициализация маленькой галереи
    loadLightBox( $( '.news__gall__miniGallWrap .preview li' ).eq(0)  );
    $(".preview li").live("click", function(){
        loadLightBox( $( this) );
        return false;
    } );






});

// загрузка лайтбокс
var loadLightBox = function(obj){

    var srcAttr = obj.children().children().attr('src'),
        hrefAttr = obj.children().attr('href');
    descript = obj.find('span').html();


    $( '.news__gall__imgBigWrap a' ).remove();
    $( '.news__gall__imgBigWrap' ).prepend( '<a href="'+ hrefAttr +'"><img src="'+ srcAttr +'"  height="321" width="225" alt=""></a>' );


    $( '.news__gall__imgBigWrap a' ).lightBox( {
        txtImage: 'Изображение',
        txtOf: 'из'
    } );


};