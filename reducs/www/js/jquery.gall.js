$(function(){



    //  инициализация маленькой галереи
    loadLightBox( $( '.news__gall__miniGallWrap .preview li' ).eq(0)  );
    $(".preview li").live("click", function(){
        loadLightBox( $( this) );
        return false;
    } );




});
//<img src="'+ hrefAttr +'"   width="100%" alt="">
// загрузка лайтбокс
var loadLightBox = function(obj){

    var srcAttr = obj.children().children().attr('src'),
        hrefAttr = obj.children().attr('href'),
        descript = obj.find('.gall_text'),
        imgContainer = new Image();

    $( '.preview a').removeClass('active');
    obj.children().addClass('active');

    $( '.news__gall__imgBigWrap').height($( '.news__gall__imgBigWrap').height());
    $( '.news__gall__imgBigWrap div' ).remove();
    imgContainer.onload = function(){

        $( '.news__gall__imgBigWrap' ).prepend( '<div><a class="gall_text" href="'+ descript.attr('data-href')+'">'+descript.html()+'</a><a class="know_more" href="'+ descript.attr('data-href')+'">Узнайте больше!</a> </div>' );
        $( '.news__gall__imgBigWrap div').prepend(this);
        $(this).width('100%');
        $( '.news__gall__imgBigWrap').removeAttr('style');

    };
    imgContainer.src = hrefAttr;





};