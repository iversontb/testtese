$(function(){

    var myGallery = $( '.gallWrap' ).clone();

    $('.showAll').click( function(){
        $(this).prev().height('100%');
        $(this).css({'display':'none'});
        $(this).next().fadeIn();
        return false;
    });
    $('.hideAll').click( function(){
        console.log(1);
        $(this).prev().prev().height(134);
        $(this).css({'display':'none'});
        $(this).prev().fadeIn();
        return false;
    });


    startGall();

    $('.subMenu > ol > li > a').click( function(){
        if ($(this).next().css('display')=="none"){
            $(this).next().slideDown(300);
        }
        else {$(this).next().slideUp(300);}
        return false;
    });


    $(window).on('resize',function(){
        $( '.gallWrap' ).remove();
        $('.site__content').prepend( myGallery );
        myGallery = $( '.gallWrap' ).clone();

        if($.browser.msie && $.browser.version<=7){
            $(".gallery a").append('<div class="moreLeft"></div><div class="moreRight"></div>');

        }

        startGall();
    });

    function startGall(){
        var countElems = $('.gallery li').length;
        if( countElems > 5) {
            elWidth = ($('.site__content').width() - 78)/5;
            $('.gallery li').width(elWidth);
            $(".gallery").jCarouselLite({
                btnNext: ".next",
                btnPrev: ".prev",
                visible: 5
            });
        } else {
            elWidth = ($('.site__content').width() - 78)/countElems;
            $('.gallery li').width(elWidth);
        }
    }

} );