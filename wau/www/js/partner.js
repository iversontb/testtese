$(function(){

    jQuery('#mycarousel3').jcarousel({
        scroll : 1,
        wrap : 'circular',
        auto: 4
    });

    $('.hide_info span').click(function(){

        if($(this).hasClass('active')){
            $(this).html('Подробнее').removeClass('active');
            $(this).parents('.wrap_partner').removeClass('active');
            $(this).parents('.wrap_partner').find('.left_wrap').animate({'height': 162});
            $(this).parents('.wrap_partner').find('.right_wrap').animate({'height': 162});
            $(this).parents('.wrap_partner').find('.center_content').animate({'height': 142});
        } else {
            var height_left = $(this).parents('.wrap_partner').find('.right_wrap_inner').height();
            var height_center = $(this).parents('.wrap_partner').find('.center_content_inner').height();
            var height = 0;
            if (height_left > height_center){
                height = height_left;
            } else {
                height = height_center;
            }
            $(this).parents('.wrap_partner').find('.left_wrap').animate({'height': height}).slideDown();
            $(this).parents('.wrap_partner').find('.right_wrap').animate({'height': height}).slideDown();
            $(this).parents('.wrap_partner').find('.center_content').animate({'height': height}).slideDown();
            $(this).html('Скрыть').addClass('active');
            $(this).parents('.wrap_partner').addClass('active');
        }
    });

} );