$(function(){

    $('.content .galleryList li').hover(
        function () {
            $(this).find('.textGall').fadeIn();
        },
        function () {
            $(this).find('.textGall').css({'display':'none'});
        }
    );

} );