$(function(){

    $('.aside_menu ').on('click','span', function(){
        if( $(this).next().css('display') == 'none'){
            $(this).next().slideDown(300);
        }
        else{
            $(this).next().slideUp(300);
        }


    });

});