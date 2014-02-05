$(function(){
    $('.about_lighting').on('click' , '>dt', function(){
        if( $(this).next().css('display') == 'none'){
            $(this).next().slideDown(300);
            $(this).addClass('active');
        }
        else{
            $(this).next().slideUp(300);
            $(this).removeClass( 'active' )
        }
    });


    $('.callback').click( function(){
        $('.time_call').fadeIn();
        return false;
    });



    $('.close_pop').click( function(){
        $('.pop_call, .time_call').fadeOut();
        return false;
    });

} );