jQuery(document).ready(function(){


    /* слайдер цен */

    jQuery("#slider").slider({
        min: 0,
        max: 5000,
        values: [0,5000],
        range: true,
        stop: function(event, ui) {
            jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
            jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
            $('.min_time').css({'left': $('.ui-slider-handle').eq(0).position().left-49 });
            $('.max_time').css({'left': $('.ui-slider-handle').eq(1).position().left });


        },
        slide: function(event, ui){
            jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
            jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
            $('.min_time').css({'left': $('.ui-slider-handle').eq(0).position().left-49 });
            $('.max_time').css({'left': $('.ui-slider-handle').eq(1).position().left });

        }
    });

    jQuery("input#minCost").change(function(){

        var value1=jQuery("input#minCost").val();
        var value2=jQuery("input#maxCost").val();
        console.log(1);
        if(parseInt(value1) > parseInt(value2)){
            value1 = value2;
            jQuery("input#minCost").val(value1);
        }
        jQuery("#slider").slider("values",0,value1);
    });


    jQuery("input#maxCost").change(function(){

        var value1=jQuery("input#minCost").val();
        var value2=jQuery("input#maxCost").val();

        if (value2 > 5000) { value2 = 2500; jQuery("input#maxCost").val(5000)}

        if(parseInt(value1) > parseInt(value2)){
            value2 = value1;
            jQuery("input#maxCost").val(value2);
        }
        jQuery("#slider").slider("values",1,value2);
    });

    $('.min_time').css({'left': $('.ui-slider-handle').eq(0).position().left-49 });
    $('.max_time').css({'left': $('.ui-slider-handle').eq(1).position().left });



});


