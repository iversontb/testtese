$(function(){

    var elemReviews = $('.open_review').length;
    $('.review_conteiner__show').html("Показать все отзывы ("+elemReviews+")");

    $('.review_conteiner__show').on('click', function(){
        var hiedeElem = $('.hide_review ').length;

        $(".hide_review").each(function (i) {

            $(this).fadeIn({
                duration:300,
                step: function(now, fx){
                    var newHeight = $('.description .active').next().outerHeight();
                    $(".description dl").height( newHeight + 32 );
                },
                complete: function(){
                    $(this).removeClass('hide_review');

                    if(!$('.hide_review ').length){
                        console.log(!$('.hide_review ').length);
                        $('.review_conteiner__show_all').css({'display':'none'});
                        $('.review_conteiner__hide_all').css({'display':'inline'});
                    }
                }
            });

        });

        return false;
    });

    $('.review_conteiner__show_all').on('click', function(){
        var hiedeElem = $('.hide_review ').length;

        $(".hide_review").each(function (i) {
            if (i == 5){
                return false;
            }
            $(this).fadeIn({
                duration:300,
                step: function(now, fx){
                    var newHeight = $('.description .active').next().outerHeight();
                    $(".description dl").height( newHeight + 32 );
                },
                complete: function(){
                    $(this).removeClass('hide_review');

                    if(!$('.hide_review ').length){
                        console.log(!$('.hide_review ').length);
                        $('.review_conteiner__show_all').css({'display':'none'});
                        $('.review_conteiner__hide_all').css({'display':'inline'});
                    }
                }
            });

        });

        return false;
    });

    $('.review_conteiner__hide_all').on('click', function(){
        var hiedeElem = $('.hide_review ').length;

        $(".open_review").each(function (i) {
            if (i >= 5){
                $(this).fadeOut({
                    duration:300,
                    complete: function(){


                            $(this).addClass('hide_review');

                    }
                });
            }



        });
        setTimeout( function(){
            $('.review_conteiner__show_all').css({'display':'inline'});
            $('.review_conteiner__hide_all').css({'display':'none'});

            var newHeight = $('.description .active').next().outerHeight();
            $(".description dl").height( newHeight + 32 );
            $('body, html').animate({
                scrollTop: $('.description').offset().top - 90
            })
        },300)

        return false;
    });
    //  инициализация маленькой галереи
    loadLightBox( $( '.news__gall__miniGallWrap .preview li' ).eq(0)  );
    $(".preview li").live("click", function(){
        loadLightBox( $( this) );
        return false;
    } );

    $(".gallery").jCarouselLite({
        btnNext: ".next",
        btnPrev: ".prev",
        visible: 3
    });

    $('.review_conteiner__add').on('click', function(){

        $(this).parents('.robinson_store').find('.review_form').slideDown({
            duration:300,
            step: function(now, fx){
                var newHeight = $('.description .active').next().outerHeight();
                $(".description dl").height( newHeight + 32 );
            }
        });

        return false;
    });
    $('.review_conteiner').on('click', '.open_review_but_plus', function(){
        var review = $(this).parent().prev().html(),
            revCount = 1 + parseInt(review),
            dataId = $(this).parents('.open_review').attr('data-id');


        $(this).parent().prev().html(revCount);

        if(revCount < 0){
            $(this).parent().prev().removeClass('open_review__positive').addClass('open_review__negative');
        }
        else{
            $(this).parent().prev().removeClass('open_review__negative').addClass('open_review__positive');

        }




        request = $.ajax({
            url: $('.review_count').attr('data-action'),
            data: {
                id: dataId
            }, // отправляет всю форму
            dataType: 'json',
            timeout: 20000,
            type: "GET",
            success: function (msg) {

                if(msg.answer == 'ok'){
                    console.log(msg);
                }

            },
            error: function (XMLHttpRequest) {
                if (XMLHttpRequest.statusText != "abort") {
                    alert("При попытке отправить сообщение произошла неизвестная ошибка. \n Попробуй еще раз через несколько минут.");
                }
            }
        });




        return false;
    });

    $('.review_conteiner').on('click', '.open_review_but_minus', function(){
        var review = $(this).parent().prev().html(),
            revCount =  parseInt(review) - 1,
            dataId = $(this).parents('.open_review').attr('data-id');


        $(this).parent().prev().html(revCount);


        if(revCount < 0){
            $(this).parent().prev().removeClass('open_review__positive').addClass('open_review__negative');
        }
        else{
            $(this).parent().prev().removeClass('open_review__negative').addClass('open_review__positive');

        }

        request = $.ajax({
            url: $('.review_count').attr('data-action'),
            data: {
                id: dataId
            }, // отправляет всю форму
            dataType: 'json',
            timeout: 20000,
            type: "GET",
            success: function (msg) {

                if(msg.answer == 'ok'){
                    console.log(msg);
                }

            },
            error: function (XMLHttpRequest) {
                if (XMLHttpRequest.statusText != "abort") {
                    alert("При попытке отправить сообщение произошла неизвестная ошибка. \n Попробуй еще раз через несколько минут.");
                }
            }
        });


        return false;
    });


    $('.review_form').on( 'submit', function(){



//        request.abort();
        request = $.ajax({
            url: $('.review_form').attr('action'),
            data: $('.review_form').serialize(), // отправляет всю форму
            dataType: 'json',
            timeout: 20000,
            type: "GET",
            success: function (msg) {

                var dateNow = new Date(),
                    strDate = dateNow.getDay() +'.'+ (dateNow.getMonth() +1 ) +'.'+dateNow.getFullYear();

                console.log(strDate);

                if(msg.answer == 'ok'){
                    var newReview = $('<div data-id="'+msg.id+'" class="open_review">\
                                            <div class="open_review__head">\
                                                <a href="#" class="open_review__positive">0</a>\
                                                <div class="open_review_but">\
                                                    <a href="#" class="open_review_but_plus">+</a>\
                                                    <a href="#" class="open_review_but_minus">-</a>\
                                                </div>\
                                                <a href="#" class="comment_but">Комментировать</a>\
                                                <time>'+strDate+'</time>\
                                                <h2>'+$('.yourName').val()+'</h2>\
                                            </div>\
                                            <p><b>Достоинства:</b> '+$('.positive').val()+'</p>\
                                                <p><b>Недостатки:</b> '+$('.negative').val()+'</p>\
                                            <p><b>Отзыв:</b> '+$('.review').val()+' </p>\
                                       </div>');

                    newReview.css({'display':'none'});
                    $('.review_conteiner__head').after(newReview);

                    newReview.slideDown({
                        duration:300,
                        step: function(now, fx){
                            var newHeight = $('.description .active').next().outerHeight();
                            $(".description dl").height( newHeight + 32 );
                        }
                    });

                    $('.review_form').slideUp({
                        duration:300,
                        step: function(now, fx){
                            var newHeight = $('.description .active').next().outerHeight();
                            $(".description dl").height( newHeight + 32 );
                        }
                    });
                    $('.review_form')[0].reset();




                }

            },
            error: function (XMLHttpRequest) {
                if (XMLHttpRequest.statusText != "abort") {
                    alert("При попытке отправить сообщение произошла неизвестная ошибка. \n Попробуй еще раз через несколько минут.");
                }
            }
        });

        var elemReviews = $('.open_review').length +1;
        $('.review_conteiner__show').html("Показать все отзывы ("+elemReviews+")");

        return false;

    });


    $( '.product_type td' ).on( {
        'mouseover': function(){
            var curItem = $( this ),
                curIndex = curItem.index() - 1;

            $( '.product_type tr').each( function(){
                $( this ).find( 'td').eq( curIndex).addClass( 'hover' );
            } );
        },
        'mouseleave': function(){
            $( '.product_type td').removeClass( 'hover' );
        },
        'click': function(){
            var curItem = $( this ),
                curIndex = curItem.index() - 1,
                art = $( '.product_type tr').eq( 0 ).find( 'td' ).eq(curIndex).find( 'div' ).attr( 'data-articul' ),
                price = $( '.product_type tr').eq( 0).find( 'td').eq(curIndex).find( 'div' ).attr( 'data-price' );


            $( '.product_type td').removeClass( 'active' );
            $( '.product_type tr').each( function(){
                $( this ).find( 'td').eq( curIndex).addClass( 'active' );
            } );
            console.log(art,price);
            $('.topic_product-art').text( art );
            //$('.topic_product-price').text( price + ' Р' );
            recalculatePrice();
        }
    } );
    $('.product__price').on( {
        'change': function(){
            recalculatePrice();
        }
    } );
    function recalculatePrice(){
        $('.topic_product-price').text( ( parseInt( $('.product__price').val() ) *  parseInt( $( '.product_type tr').eq( 0).find( 'td.active' ).find( 'div' ).attr( 'data-price' ) ) )+ ' Р' );
    }
});

// загрузка лайтбокс
var loadLightBox = function(obj){

    var srcAttr = obj.children().children().attr('src'),
        hrefAttr = obj.children().attr('href');
    descript = obj.find('span').html();


    $( '.news__gall__imgBigWrap a' ).remove();
    $( '.news__gall__imgBigWrap' ).prepend( '<a href="'+ hrefAttr +'"><img src="'+ srcAttr +'"  height="321" width="225" alt=""></a>' );


//    $( '.news__gall__imgBigWrap a' ).lightBox( {
//        txtImage: 'Изображение',
//        txtOf: 'из'
//    } );


};