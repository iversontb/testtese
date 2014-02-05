$(function(){



    //  инициализация маленькой галереи
    loadLightBox( $( '.news__gall__miniGallWrap .preview li' ).eq(0)  );
    $(".preview li").live("click", function(){
        loadLightBox( $( this) );
        return false;
    } );



    $(window).load(function(){
        $('.news__gall__imgBigWrap').height($('.news__gall__imgBigWrap img').height());
    });

    $(window).resize(function(){
        $('.news__gall__imgBigWrap').height($('.news__gall__imgBigWrap img').height());
    });


});

// загрузка лайтбокс
var loadLightBox = function(obj){

    var srcAttr = obj.children().children().attr('src'),
        hrefAttr = obj.children().attr('href');

    $( '.news__gall__imgBigWrap a' ).remove();
    $( '.news__gall__imgBigWrap' ).prepend( '<a href="'+ srcAttr +'"><img src="'+ srcAttr +'"   width="214px" height="215px" alt=""></a>' );


    $( '.news__gall__imgBigWrap a' ).lightBox( {
        txtImage: 'Изображение',
        txtOf: 'из'
    } );


};