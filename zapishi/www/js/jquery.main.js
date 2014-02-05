$(function(){


    $('.selectResult').click( function(){
       $(this).next().slideDown();
        return false;
    });

    $('.selectList').mouseleave( function(){
        $('.selectList').slideUp();
    });

    $('.selectList .scroll-simple').on('click', 'a', function(){
        $('.selectResult').text($(this).text());
        $('.selectList').slideUp();
        return false;

    });

    $('.popShow').click( function(){
        $('.popUp').fadeIn();
        return false;
    });

    $('.popBack, .closePop').click( function(){
        $('.popUp').fadeOut();
        return false;
    });


    $(window).load(function () {
        var ElHeight = $('.listWrap li').height();
        $('.hoverBack').css({'padding-top': ElHeight + 50});
    });



    var ElHeight = $('.listWrap li').height();
    $('.hoverBack').css({'padding-top':ElHeight+50});
    $(window).resize(function () {
        var ElHeight = $('.listWrap li').height();
        $('.hoverBack').css({'padding-top': ElHeight + 50});
    });


    $('.showMap').click( function(){

        if( $(this).hasClass('closeMap') ){

            $(this).text('СВЕРНУТЬ КАРТУ');

            $(this).addClass('backMap');
            $(this).removeClass('closeMap');

            $(this).prev().animate({
               height: "650"

            }, 500 );

        }
        else{

            $(this).text('РАЗВЕРНУТЬ КАРТУ');

            $(this).removeClass('backMap');
            $(this).addClass('closeMap');

            $(this).prev().animate({
                height: "139"

            }, 500 );
        }
        return false;
    });

    $(".asideMenu span").click(
        function () {
            if ($(this).next().css('display')=="none"){
                $(this).next().slideDown(300);
            }
            else {$(this).next().slideUp(300);}
        });



} );