$(function(){


    jQuery("#slider").slider({
        min: 0,
        max: 10000000,
        values: [0,10000000],
        range: true,
        stop: function(event, ui) {
            jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
            jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));

        },
        slide: function(event, ui){
            jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
            jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
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

        if (value2 > 10000000) { value2 = 10000000; jQuery("input#maxCost").val(10000000)}

        if(parseInt(value1) > parseInt(value2)){
            value2 = value1;
            jQuery("input#maxCost").val(value2);
        }
        jQuery("#slider").slider("values",1,value2);
    });


    jQuery("#slider2").slider({
        min: 0,
        max: 10000000,
        values: [0,10000000],
        range: true,
        stop: function(event, ui) {
            jQuery("input#minCost2").val(jQuery("#slider2").slider("values",0));
            jQuery("input#maxCost2").val(jQuery("#slider2").slider("values",1));

        },
        slide: function(event, ui){
            jQuery("input#minCost2").val(jQuery("#slider2").slider("values",0));
            jQuery("input#maxCost2").val(jQuery("#slider2").slider("values",1));
        }
    });

    jQuery("input#minCost2").change(function(){

        var value1=jQuery("input#minCost2").val();
        var value2=jQuery("input#maxCost2").val();

        if(parseInt(value1) > parseInt(value2)){
            value1 = value2;
            jQuery("input#minCost2").val(value1);
        }
        jQuery("#slider2").slider("values",0,value1);
    });


    jQuery("input#maxCost2").change(function(){

        var value1=jQuery("input#minCost2").val();
        var value2=jQuery("input#maxCost2").val();

        if (value2 > 10000000) { value2 = 10000000; jQuery("input#maxCost2").val(10000000)}

        if(parseInt(value1) > parseInt(value2)){
            value2 = value1;
            jQuery("input#maxCost2").val(value2);
        }
        jQuery("#slider2").slider("values",1,value2);
    });






    jQuery("#slider3").slider({
        min: 0,
        max: 10000000,
        values: [0,10000000],
        range: true,
        stop: function(event, ui) {
            jQuery("input#minCost3").val(jQuery("#slider3").slider("values",0));
            jQuery("input#maxCost3").val(jQuery("#slider3").slider("values",1));

        },
        slide: function(event, ui){
            jQuery("input#minCost3").val(jQuery("#slider3").slider("values",0));
            jQuery("input#maxCost3").val(jQuery("#slider3").slider("values",1));
        }
    });

    jQuery("input#minCost3").change(function(){

        var value1=jQuery("input#minCost3").val();
        var value2=jQuery("input#maxCost3").val();

        if(parseInt(value1) > parseInt(value2)){
            value1 = value2;
            jQuery("input#minCost3").val(value1);
        }
        jQuery("#slider3").slider("values",0,value1);
    });


    jQuery("input#maxCost3").change(function(){

        var value1=jQuery("input#minCost3").val();
        var value2=jQuery("input#maxCost3").val();

        if (value2 > 10000000) { value2 = 10000000; jQuery("input#maxCost3").val(10000000)}

        if(parseInt(value1) > parseInt(value2)){
            value2 = value1;
            jQuery("input#maxCost3").val(value2);
        }
        jQuery("#slider3").slider("values",1,value2);
    });




// фильтрация ввода в поля
    jQuery('.slideWrap input').keypress(function(event){
        var key, keyChar;
        if(!event) var event = window.event;

        if (event.keyCode) key = event.keyCode;
        else if(event.which) key = event.which;

        if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
        keyChar=String.fromCharCode(key);

        if(!/\d/.test(keyChar))	return false;

    });


});


