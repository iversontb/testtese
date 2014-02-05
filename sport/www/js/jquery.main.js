$(function(){

    if(Slider == 1 ){
        $("#coin-slider").coinslider({
            width: 730,
            height: 442,
            spw: 5,
            sph: 4,
            delay: 5000
        });
    }


    if(Slider == 2 ){
        jQuery("#slider").slider({
            min: 0,
            max: 15000,
            values: [0,15000],
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

            if (value2 > 15000) { value2 = 15000; jQuery("input#maxCost").val(15000)}

            if(parseInt(value1) > parseInt(value2)){
                value2 = value1;
                jQuery("input#maxCost").val(value2);
            }
            jQuery("#slider").slider("values",1,value2);
        });



    // фильтрация ввода в поля
        jQuery('input').keypress(function(event){
            var key, keyChar;
            if(!event) var event = window.event;

            if (event.keyCode) key = event.keyCode;
            else if(event.which) key = event.which;

            if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
            keyChar=String.fromCharCode(key);

            if(!/\d/.test(keyChar))	return false;

        });
    }

    if(Slider == 3 ){
        $(function(){
            $( '.gallery' ).jCarouselLite({
                btnNext: ".next",
                btnPrev: ".prev",
                visible: 4
            });
        });




        // инициализация маленькой галереи
        loadLightBox( $( '.miniGallWrap .preview li a' ).eq(0)  );
        $(".preview li a").live("click", function(){
            loadLightBox( $( this ) );
            return false;
        } );
    }


} );


// загрузка лайтбокс
var loadLightBox = function(obj){

    var srcAttr = obj.children().attr('src'),
        hrefAttr = obj.attr('href');

    $( '.imgBigWrap a' ).remove();
    $( '.imgBigWrap' ).append( '<a href="'+ hrefAttr +'"><img src="'+ srcAttr +'"  height="313" width="467" alt=""></a>' );

    $( '.imgBigWrap a' ).lightBox( {
        txtImage: 'Изображение',
        txtOf: 'из'
    } );

};