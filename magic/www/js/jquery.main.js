$(function(){

    $('.slideBlock').css({'display':'none'});

    $('.slideButType').click( function(){


        if ($(this).next().css('display')=="none"){
            $('.slideButType').css({'display':'block'});
            $('.slideBlock').slideUp();
            $(this).css({'display':'none'});
            $(this).next().slideDown();
        }
//        else {
//            $(this).next().slideUp();
//        }

    });

    $('.catalogList > li').hover(
        function () {
            $(this).find('.typeBlock ul').slideDown();
            $(this).find('.typeBlock h3').css({'color':'#d89637'});
        },
        function () {
            $(this).find('.typeBlock ul').css({'display':'none'});
            $(this).find('.typeBlock h3').css({'color':'#161616'});
        }
    );

    $('.subMenu ol > li > a').mouseover(function(){

        $('.subMenu ol > li > a').next().css({'display':'none'});
        $(this).next().fadeIn();

    });

    $('.levelMenu > ul > li > a').mouseover(function(){

        $('.openMenuBlock ul > li > a').next().css({'display':'none'});
        $(this).next().fadeIn();

    });

    $('.openMenuBlock').mouseleave( function(){
       $(this).fadeOut();
        $('.openMenuBlock ul a').next().fadeOut();
    });







    jQuery("#slider").slider({
        min: 0,
        max: 50,
        values: [0,50],
        range: true,
        stop: function(event, ui) {
            jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
            jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));

        },
        slide: function(event, ui){

            jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
            jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));

            var firstPos = $('#slider').children().next().position().left;
            var secondPos = $('#slider').children().next().next().position().left;

            jQuery("input#minCost").css({'left':firstPos-7});
            jQuery("input#maxCost").css({'left':secondPos-15});
        }
    });

    jQuery("input#minCost").change(function(){
        var value1=jQuery("input#minCost").val();
        var value2=jQuery("input#maxCost").val();

        if(parseInt(value1) > parseInt(value2)){
            value1 = value2;
            jQuery("input#minCost").val(value1);
        }
        jQuery("#slider").slider("values",0,value1);
    });


    jQuery("input#maxCost").change(function(){
        var value1=jQuery("input#minCost").val();
        var value2=jQuery("input#maxCost").val();

        if (value2 > 50) { value2 = 50; jQuery("input#maxCost").val(50)}

        if(parseInt(value1) > parseInt(value2)){
            value2 = value1;
            jQuery("input#maxCost").val(value2);
        }
        jQuery("#slider").slider("values",1,value2);
    });



} );