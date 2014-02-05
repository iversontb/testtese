$(function(){
    $('.sort_by form').on( { 'click': function(event){
        event = event || window.event // кросс-браузерно
        if (event.stopPropagation) {
            // Вариант стандарта W3C:
            event.stopPropagation()
        } else {
            // Вариант Internet Explorer:
            event.cancelBubble = true
        }
    } } );

    $('.wrap_list .buy').click(function(){

        main_add(this, '.cart_block__inner');
        setTimeout(function(){
            $('.empty_text').css('display', 'none');
            $('.bonus').css('display', 'block');
            $('.total').css('display', 'block');
        }, 400);

        return false;
    });
    $('.like').click(function(){
        main_add(this, '.like_block_inner');
        return false;
    });

    function main_add(click_el, main_block){
        $('.append_img').remove();

        var i = 0;
        $('.list_product .special').each(function(){
            i += 1;
            $(this).attr('data-id', i);
        });

        var left = $(click_el).parents('.special').find('img').offset().left;
        var top = $(click_el).parents('.special').find('img').offset().top;

        var data_id = $(click_el).parents('.special').attr('data-id');
        var index = 'data-id="' + $(click_el).parents('.special').attr('data-id') + '"';
        var name = $(click_el).parents('.special').find('.title span').last().html();
        var src = $(click_el).parents('.special').find('img').attr('src');
        var price = $(click_el).parents('.special').find('.price').html();
        var count = $(click_el).parents('.special').find('.wrap_qty input').val();

        var img = '<img class="append_img" src="'+src+'" alt="" />';
        var cart_img = '<img style="display: none" src="'+src+'" alt="" />';

        var list = $(main_block).find('.product_wrap');
        if(list.length){
            var check_item = -1;
            list.each(function(i){
                if ($(this).attr('data-id') == data_id){
                    check_item = i;
                    return false;
                }
            });

            var left_to, top_to;
            if(check_item > -1){
                var new_count = parseInt(list.eq(check_item).find('.count').html()) + parseInt(count);

                list.eq(check_item).find('.count').html(new_count);
                left_to = list.eq(check_item).last().find('.wrap_img').offset().left;
                top_to = list.eq(check_item).last().find('.wrap_img').offset().top;
            } else {
                $(main_block).append('<div class="product_wrap" ' + index + '>' + '<a href="#" class="wrap_img">'+cart_img+'</a><div class="product_info"><a href="#">' + name + '</a><span><span class="count">'+count+'</span>х'+price+'</span></div></div>');
                $(main_block).find('.product_wrap').last().css('display', 'none').slideDown();
                left_to = list.eq(check_item).last().find('.wrap_img').offset().left;
                top_to = list.eq(check_item).last().find('.wrap_img').offset().top;
            }
        } else {
            $(main_block).append('<div class="product_wrap" ' + index + '>' + '<a href="#" class="wrap_img">'+cart_img+'</a><div class="product_info"><a href="#">' + name + '</a><span><span class="count">'+count+'</span>х'+price+'</span></div></div>');
            $(main_block).find('.product_wrap').last().css('display', 'none').slideDown();
            left_to = $(main_block).find('.product_wrap').last().find('.wrap_img').offset().left;
            top_to = $(main_block).find('.product_wrap').last().find('.wrap_img').offset().top;
        }

        $('body').append(img);
        $('body').find('.append_img').offset({"top":top, "left":left}).animate({"width":51, "height":49,"top":top_to+10, "left":left_to, "opacity":0});

        setTimeout(function(){
            $(main_block).find('.product_wrap').last().find('img').css('display', 'block');
        }, 300);
        return false;

    }

});
