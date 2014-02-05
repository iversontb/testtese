$(function(){

    $('a[href*=#]').bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
        return false;
    });


    $('.product_info .for_order').click(function(){
        $('.order_popup, .order_popup__inner').fadeIn(300);
        $('.order_popup__inner').css({
            left: ($(window).width() - $('.order_popup__inner').outerWidth())/2,
            top: ($(window).height()- $('.order_popup__inner').outerHeight())/2
        });
        return false;
    });


    $('.popup_product .close_popup').click(function(){
        $('.popup_product').fadeOut();
    });
    $('.order_popup .close_popup').click(function(){
        $('.order_popup').fadeOut();
    });
//  end закрытие попапов

//    Инициализация бокового выпадающего меню
    $('.content_aside h2').click(function(){
        if ($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).next().slideUp();
        } else {
            $('.content_aside h2').removeClass('active').next().slideUp();

            $(this).addClass('active');
            $(this).next().slideDown();
        }
    });
//    end Инициализация бокового выпадающего меню


    $(window).scroll(function () {
        if ($(this).scrollTop() > $('.site').height() - ( ($('.site').height()*20)/100) ) {
            $('#scroller').fadeIn();
        } else {
            $('#scroller').fadeOut();
        }
    });
    $('#scroller').click(function () {$('body,html').animate({scrollTop: 0}, 400); return false;});



    $('.special .wrap_img img').click(function(){

        $('.popup_product').fadeIn(300);
        var image = new Image();
        $('.popup_product__wrap').fadeIn({
            duration:300,
            complete: function(){
                image.onload =  function(){
                    $(".zoom_img").elevateZoom({
                        zoomType : "inner",
                        cursor: "crosshair",
                        zoomWindowFadeIn: 500,
                        zoomWindowFadeOut: 750
                    });
                };
                image.src = $(".zoom_img").attr('src');
            }
        });
        $('html, body, .site').css('overflow', 'hidden');
        $('.site').css('margin-right', '17px');
    });

    $('.brand_but').click(function(){
        $('.popup_brand').fadeIn(300);
        $('.popup_brand__wrap').fadeIn();
        $('html, body, .site').css('overflow', 'hidden');

        $('.site').css('margin-right', '17px');
    });

    $(window).resize(function(){
        $('.popup').css({
            left: ($(window).width() - $('.popup').outerWidth())/2,
            top: ($(window).height()- $('.popup').outerHeight())/2
        });
        $('.order_popup__inner').css({
            left: ($(window).width() - $('.order_popup__inner').outerWidth())/2,
            top: ($(window).height()- $('.order_popup__inner').outerHeight())/2
        });
        $('.popup_product__wrap').css({
            left: ($(window).width() - $('.popup_product__wrap').outerWidth())/2
        });
    });
    $(window).resize();

    $('.order_popup').click(function(){
        if($('.order_popup__inner').css('display')=='block'){
            $('.order_popup__inner, .order_popup').fadeOut();
        }
    });
    $('body').click( function(){

        if($('.popup').css('display')=='block'){
            $('.popup, .wrap_popup').fadeOut();
        }
        if($('.popup_product__wrap').css('display')=='block'){
            $('html, body, .site').css('overflow', 'auto');
            $('.site').css('margin-right', '0');
            $('.popup_product__wrap, .popup_product').fadeOut();

            $('.zoomContainer').remove();
        }
        if($('.popup_brand__wrap').css('display')=='block'){
            $('html, body, .site').css('overflow', 'auto');
            $('.site').css('margin-right', '0');

            $('.popup_brand__wrap, .popup_brand').fadeOut();
        }
    });
    //    end popup

    //    back_call__popup
    $('.back_call').click(function(){
        $('.back_call__popup').slideToggle();
    });
    $('body').click( function(){
        if($('.back_call__popup').css('display')=='block'){
            $('.back_call__popup').slideUp();
        }
    });
    //    end back_call__popup


    //    sort_by
    $('.sort_by .wrap_btn a').click(function(){
        $('.sort_by form').slideToggle();
        return false;
    });
    $('body').click( function(){
        if($('.sort_by form').css('display')=='block'){
            $('.sort_by form').css({'display':'none'});
        }
    });
    //    end sort_by


    $('.wrap_feedback h2').click(function(){
        $(this).next().slideToggle();
    });

    $('.sort_by form, .popup, .wrap_back_call, .popup_product__wrap, .special .wrap_img img, .brand_but, .close_popup, .order_popup, .order_popup__inner').on( { 'click': function(event){
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

