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


    $( '.news__gall__imgBigWrap a' ).remove();
    $( '.news__gall__imgBigWrap iframe' ).remove();

    if ( obj.children().hasClass('videoConatiner') ){
        $( '.news__gall__imgBigWrap' ).prepend( '<iframe width="100%" height="433" src="'+ hrefAttr +'" frameborder="0" allowfullscreen></iframe>' );

    }

    else{
        $( '.news__gall__imgBigWrap' ).prepend( '<a href="'+ hrefAttr +'"><img src="'+ srcAttr +'"   width="100%" alt=""></a>' );
    }


};