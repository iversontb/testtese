$(function(){

        jQuery('#mycarousel2').jcarousel({
            scroll : 1,
            visible : 4,
            wrap : 'circular'
        });

    $('.show_code').click(function(){
        $(this).css('display','none');
        $(this).next().css('display','block');
        return false;
    });

//    $(".info-nav li").click(function(){
//        var index = $(this).index();
//        $(".info-nav li").removeClass("current");
//        $(this).addClass("current");
//        $(".info").stop(false,false).hide();
//        $(".info:eq("+index+")").stop(false,false).show();
//    });

        $('.info__right .update').click(function(){
            $('.wrap_popup, .popup').fadeIn(300);
            $('.popup').css({
                left: ($(window).width() - $('.order_popup__inner').outerWidth())/2,
                top: ($(window).height()- $('.order_popup__inner').outerHeight())/2
            });
            $(window).resize();

            return false;
        });

        $('.close_popup').click(function(){
            $('.wrap_popup').fadeOut();

        });
//  end закрытие попапов


        $(window).resize(function(){
            $('.popup').css({
                left: ($(window).width() - $('.popup').outerWidth())/2,
                top: ($(window).height()- $('.popup').outerHeight())/2
            });
        });
        $(window).resize();

        $('body').click( function(){
            if($('.wrap_popup').css('display')=='block'){
                $('.popup, .wrap_popup').fadeOut();
            }
        });
        //    end popup


        $('.close_popup, .popup').on( { 'click': function(event){
            event = event || window.event // кросс-браузерно
            if (event.stopPropagation) {
                // Вариант стандарта W3C:
                event.stopPropagation();
            } else {
                // Вариант Internet Explorer:
                event.cancelBubble = true;
            }
        } } );


} );