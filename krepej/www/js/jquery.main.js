$(function(){


    var count = $('.carBlock a').length;
    for (var i = 0; i < count; i++ ){
        $('.carBlock a').eq(i).attr("_id",i);
    }

    var count2 = $('.carBlock .box ').length;
    for (var i = 0; i < count; i++ ){
        $('.carBlock .box').eq(i).attr("id",i);
    }

    $('.carBlock a').hover(
        function () {
            var hrefAttr = $(this).attr('_id');
            $('.carBlock').find('#'+hrefAttr).css({'display':'block'});
        },
        function () {
            var hrefAttr = $(this).attr('_id');
            $('.carBlock').find('#'+hrefAttr).css({'display':'none'});
        }
    );


} );