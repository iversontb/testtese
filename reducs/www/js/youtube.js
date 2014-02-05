$(function(){
    var videoHeight = $('.youtube_content').width() * 0.56;
    $('.youtube_content').height( videoHeight );
    $('.content_p').height(videoHeight);

    $(window).resize(function(){
        var videoHeight = $('.youtube_content').width() * 0.56;
        $('.youtube_content').height( videoHeight );

        $('.content_p').height(videoHeight);
        if($(window).width() < 795)  {
            $('.content_p').height('auto');
        }
    });
});