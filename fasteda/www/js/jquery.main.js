$(function(){

//    $('.mainMenu section').hover(function(){
//        $('.mainMenu section nav').css('display', 'none');
//        $(this).children('nav').stop().slideDown();
//    });
//
//    $('.mainMenu section').mouseleave(function(){
//        $(this).children('nav').css('display', 'none');
//    })

    $('.stationList table .no_delivery').on('click' , 'a', function(){
       return false;
    });

    $('.doneBut').on('click', function(){
        $('.yourStation').fadeOut();
        return false;
    });

    $('.message_check').on( "change",function(){

        if($(this).attr( 'checked' )){
            $(this).parents('.lineContainer').next().fadeIn(100);
            basketHeight = $('.basketBlock').height();

        }else{
            $(this).parents('.lineContainer').next().css({'display':'none'});
            basketHeight = $('.basketBlock').height();
        }
    });


    $('.foodTabs > li ').hover( function(){

        $('.foodTabs > ul').css({'display': 'none'});
        $(this).children().next().stop().slideDown();
        $('.foodTabs > li > a').removeClass('active');
        $(this).children().addClass('active');
    });



    $('.foodTabs > li').mouseleave( function(){


        $(this).children().next().css({'display': 'none'});
        $(this).children().removeClass('active');
    });




//    if( $("div").is(".message")){
//
//        var header_top = $('.header_top');
//
//        header_top.css({'top':'47px'});
//        $(window).scroll(function() {
//            scrollElem2 = $(window).scrollTop();
//
//            if( scrollElem2 >= 47 ){
//
//                header_top.css( {
//                    'position' : 'fixed',
//                    'top': '0'
//
//
//                } );
//
//            }
//            else{
//
//                header_top.css( {
//                    'position' : 'fixed',
//                    'top':'47px'
//
//                } );
//
//            }
//
//        });
//
//    }

    $('.asideMenu a').click( function(){

        $(this).next().slideDown();
        return false;
    });

    $('.asideMenu').mouseleave( function(){
        $(this).children().next().css({'display':'none'});
    });

    $('.butonsWrap a').click( function(){
        var elemText = $(this).text();
        $(this).parents('.asideMenu').find('.active').text(elemText);
        $(this).parent().css({'display':'none'});
        return false;
    });


    $('.subMenu a.active div').append('<span class="arrow"></span>');




    $('.good_submit').click(function(){
        $('.bad_submit').removeClass('active');
        $(this).addClass('active');
        return false;
    });
    $('.bad_submit').click(function(){
        $('.good_submit').removeClass('active');
        $(this).addClass('active');
        return false;
    });

    $('.wrap_button .next_item').click(function(){
        $(this).css('display', 'none');
        $('.restaurant_reviews .wrap_button').addClass('all_review');
        $('.next_reviews').slideDown();
        return false;
    })

} );