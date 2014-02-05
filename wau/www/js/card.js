$(function(){

    $('.preview li img').on({'click': function(){
        $('.preview li').removeClass('active');
        $(this).parents('li').addClass('active');
        var hrefAttr = $(this).parents('a').attr('href');
        $(".wrap_product .big_img").fadeOut('fast',function(){
            $( '.wrap_gallery .big_img a' ).remove();
            $( '.wrap_gallery .big_img' ).prepend( '<a href="'+ hrefAttr +'"><img src="'+ hrefAttr +'" width="457" alt=""></a>' );
        });
        $(".wrap_product .big_img").fadeIn();
        return false;
    }});
    $(".wrap_gallery .big_img").click(function(){
        $('.preview li.active a').trigger('click');
        return false;
    });
    $('.preview li').eq(0).trigger('click');

} );