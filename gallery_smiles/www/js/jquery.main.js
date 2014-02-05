$(function(){
    $('.teeth').on('click' , '>dt', function(){
        if( $(this).next().css('display') == 'none'){
            $(this).next().slideDown(300);
            $(this).addClass('active');
        }
        else{
            $(this).next().slideUp(300);
            $(this).removeClass( 'active' )
        }
    });
} );