$(function(){



    $('.content a.townSelect').live( 'click', function(){



        if ($(this).next().css('display')=="none"){

            $(this).next().slideDown();
        }
        else{
            $(this).next().slideUp();
        }

        return false;

    });

    $('.content .openList a').live( 'click', function(){


        var selecElem = $(this).clone().addClass('townSelect');
        $(this).parent().parent().prev().remove();
        $('.townSelectWrap').prepend(selecElem);

        $(this).parent().parent().slideUp();

        return false;

    });

    $('.butLand').mouseover( function(){
        $(this).find('.subMenu').fadeIn();
    });

    $('.butLand').mouseleave( function(){
        $(this).find('.subMenu').css({'display':'none'});
    });

    $('.subMenu > .wraper > ul > li').mouseover( function(){
        $(this).find('.subMenu2').fadeIn();
    });

    $('.subMenu > .wraper > ul > li').mouseleave( function(){
        $(this).find('.subMenu2').css({'display':'none'});
    });



} );