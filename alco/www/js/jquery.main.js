$(function(){


    $(".asideMenu").on('click', 'a', function() {

        if ($(this).next().css('display')=="none"){
            $(this).next().slideDown(300);
        }
        else {$(this).next().slideUp(300);}

        return false;
    });

} );