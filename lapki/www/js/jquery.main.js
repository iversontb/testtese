$(function(){

//
//    // действия при нажатии на чекбокс
//    $( '.checkBox input' ).change( function(){
//
//        if( $( '.checkBox input' ).attr('checked')=='checked'){
//            $(this).parents('.checkBox').addClass(active);
//        }
////        else{
////
////        }
//    });


    $('.mainAccard > li:first-child a').css({'display':'none'});
    $('.mainAccard > li:first-child .subMenuWrap').css({'display':'block'});

    // аккрадион на главной
    $('.mainAccard >li > a').click( function(){
        $('.mainAccard >li > a').slideDown();
        $('.subMenuWrap').slideUp();
        $(this).slideUp();
        $(this).next().slideDown();
        return false;
    });




    // инициализация маленькой галереи
    loadLightBox( $( '.miniGallWrap .preview li a' ).eq(0)  );

    $( '.miniGallWrap .preview' ).on( 'click', 'li a', function() {
        loadLightBox( $( this ) );
        return false;
    } );



    $("#coin-slider").coinslider({
        width: 633,
        height: 215,
        spw: 5,
        sph: 4,
        delay: 50000
    });



});


// загрузка лайтбокс
var loadLightBox = function(obj){

    var srcAttr = obj.children().attr('src'),
        hrefAttr = obj.attr('href');

    $( '.imgBigWrap a' ).remove();
    $( '.imgBigWrap' ).append( '<a href="'+ hrefAttr +'"><img src="'+ srcAttr +'"  height="199" width="423" alt=""></a>' );

};

