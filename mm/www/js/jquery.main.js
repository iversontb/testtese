$(function(){


    $(window).scroll(function() {
        scrollElem = $(window).scrollTop();
        var curScroll = scrollElem;

        if( scrollElem >= 118 ){
            $( '.nav_block' ).css( {
                'position' : 'fixed',
                'top':'0'
            } );
        }
        else{
            $( '.nav_block' ).css( {
                'position' : 'absolute',
                'top':'118px'
            } );
        }
        if(curScroll > 300){
            curScroll = 300;
        }
        $( '.nav_block').css({'opacity':curScroll/300});
    });


    $('.massage_type div').mouseover( function(){
       $(this).find('.hide_text').fadeIn();
    });

    $('.massage_type div').mouseleave( function(){
        $(this).find('.hide_text').stop().css({'display':'none'});
    });

} );