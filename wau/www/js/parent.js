$(function(){

    jQuery('#mycarousel2').jcarousel({
        scroll : 1,
        visible : 4,
        wrap : 'circular'
    });

    $('.hide_info span').click(function(){
        if($(this).hasClass('active')){
            $(this).html('<span>arrow</span>&nbsp;&nbsp;Подробнее').addClass('active');
            $(this).parents('.wrap_partner').removeClass('active');
        } else {
            $(this).html('<span>arrow</span> &nbsp;&nbsp;Скрыть</span>').addClass('active');
            $(this).parents('.wrap_partner').addClass('active');
        }
    });

} );