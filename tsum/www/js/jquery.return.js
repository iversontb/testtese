$(function(){


    jQuery(".number_type").keypress (
        function(event)
        {
            var key, keyChar;
            if(!event) var event = window.event;

            if (event.keyCode) key = event.keyCode;
            else if(event.which) key = event.which;

            /*
             если нажата одна из следующих клавиш: enter, tab, backspace, del, стрекла влево, стрелка вправо
             тогда на этом завершаем работу функции, т..к эти клавиши нужны для нормальной работы с полями форм
             */
            if(key==null || key==0 || key==8 || key==13 || key==37 || key==39 || key==46 || key==9) return true;
            keyChar=String.fromCharCode(key);

            /*
             d - это зарезервированное сокращение в регулярных выражениях, означает любая цифра
             */
            if(!/\d/.test(keyChar))	return false;

        });

    $('.no_return').change(function(){
        console.log(1);
        $(this).parents('.delivery-type').find('.reasons_text').empty()
    });


    $('.return_reason_but').change(function(){
       $(this).parents('.delivery-type').find('.reasons').fadeIn();
    });


    $('.reasons').mouseleave( function(){
       $(this).css({'display':'none'});
    });

    $('.reasons input[type="radio"]').change(function(){
        var reasonElem = $.trim($(this).parent().text());
        $(this).parents('.delivery-type').find('.reasons_text').empty().text(reasonElem);
        $('.reasons').fadeOut();
    });

    $('.requared').focusout(function(){

        $(this).parent().removeClass('error_input');

    })

    $('.continue_but').on('click', function(){
        $(this).parents('.return_block').find('.return_steps span').removeClass('active');
        if($('.first_step').css('display')=="block"){
            $(this).parents('.return_block').find('.return_steps').children().eq(1).addClass('active');
            $('.first_step').css({'display':'none'});
            $('.second_step').fadeIn();
            $('.return_but').fadeIn();
        }
        else if($('.second_step').css('display')=="block"){

            if($('.cash_payment').css('display')=="block"){


                var inputCount = $('.requared'),
                    i;

                for( i = 0; i<inputCount.length; i++){

                    if (inputCount.eq(i).val()=="") {
                        inputCount.eq(i).focus();
                        inputCount.eq(i).parent().addClass('error_input');
                        return false;
                    }



                }
                $(this).parents('.return_block').find('.return_steps').children().eq(2).addClass('active');
                $('.second_step').css({'display':'none'});
                $('.third_step').fadeIn();
                $('.return_but').fadeOut();
                $(this).fadeOut();
                $('.continue_buy').fadeIn();

            }
            else{
                $(this).parents('.return_block').find('.return_steps').children().eq(2).addClass('active');
                $('.second_step').css({'display':'none'});
                $('.third_step').fadeIn();
                $('.return_but').fadeOut();
                $(this).fadeOut();
                $('.continue_buy').fadeIn();
            }

        }
        return false;
    });

    $('.return_but').on('click', function(){
        $(this).parents('.return_block').find('.return_steps span').removeClass('active');
        $(this).parents('.return_block').find('.return_steps').children().eq(0).addClass('active');
        $('.second_step').css({'display':'none'});
        $('.first_step').fadeIn();
        $('.return_but').fadeOut();
        return false;
    });

});