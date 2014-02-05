/* --------------- gallery --------------- */
jQuery(function(){

    var isHover = false;

    $('.gallery').mouseover( function(){
        isHover = true;
    });

    $('.gallery').mouseleave( function(){
        isHover = false;
    });

    jQuery(".gallery").jCarouselLite({
        beforeStart: function(a){
            if( isHover ){
                return false;

            } else {
                return true;
            }
        },
		btnNext: ".next",
		btnPrev: ".prev",
		mouseWheel: true,
		visible: 1,
        auto: 4000,
        speed: 1000

	});
});
/* --------------- /gallery --------------- */