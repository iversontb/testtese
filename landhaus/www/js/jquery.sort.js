$(function(){
    $('.sort_but').on('click','a',function(){
        $(this).parent().find('a').removeClass('active');
        $(this).addClass('active');
        var elemIndex = $(this).index();
        $(this).parent().find('input').val(elemIndex);
        return false;
    });
});
