$(document).ready(function(){

	$(".b-carousel-button-right_c").click(function(){
		$(".h-carousel-items_c").animate({"left": "0px"}, 200); 
		setTimeout(function () { 
			$(".h-carousel-items_c .b-carousel-block_c").eq(0).clone().appendTo(".h-carousel-items_c"); 
			$(".h-carousel-items_c .b-carousel-block_c").eq(0).remove(); 
			$(".h-carousel-items_c").css({"left":"0px"});
		}, 200);
	});

	$(".b-carousel-button-left_c").click(function(){
		$(".h-carousel-items_c .b-carousel-block_c").eq(-1).clone().prependTo(".h-carousel-items_c");
		$(".h-carousel-items_c").css({"left":"0px"});	
		$(".h-carousel-items_c").animate({"left": "0px"}, 200);
		$(".h-carousel-items_c .b-carousel-block_c").eq(-1).remove(); 
	});

	

$(".b-carousel-button-right_r").click(function(){
		$(".h-carousel-items_r").animate({"left": "0px"}, 200); 
		setTimeout(function () { 
			$(".h-carousel-items_r .b-carousel-block_r").eq(0).clone().appendTo(".h-carousel-items_r"); 
			$(".h-carousel-items_r .b-carousel-block_r").eq(0).remove(); 
			$(".h-carousel-items_r").css({"left":"0px"});
		}, 200);
	});

	$(".b-carousel-button-left_r").click(function(){
		$(".h-carousel-items_r .b-carousel-block_r").eq(-1).clone().prependTo(".h-carousel-items_r");
		$(".h-carousel-items_r").css({"left":"0px"});	
		$(".h-carousel-items_r").animate({"left": "0px"}, 200);
		$(".h-carousel-items_r .b-carousel-block_r").eq(-1).remove(); 
	});

$(".v_b-carousel-button-right_c").click(function(){
		$(".v_h-carousel-items_c").animate({top: "00px"}, 200); 
		setTimeout(function () { 
			$(".v_h-carousel-items_c .v_b-carousel-block_c").eq(0).clone().appendTo(".v_h-carousel-items_c"); 
			$(".v_h-carousel-items_c .v_b-carousel-block_c").eq(0).remove(); 
			$(".v_h-carousel-items_c").css({"top":"0px"});
		}, 200);
	});

	$(".v_b-carousel-button-left_c").click(function(){
		$(".v_h-carousel-items_c .v_b-carousel-block_c").eq(-1).clone().prependTo(".v_h-carousel-items_c");
		$(".v_h-carousel-items_c").css({"top":"0px"});	
		$(".v_h-carousel-items_c").animate({top: "0px"}, 200);
		$(".v_h-carousel-items_c .v_b-carousel-block_c").eq(-1).remove(); 
	});

$(".v_b-carousel-button-right_r").click(function(){
		$(".v_h-carousel-items_r").animate({"top": "0px"}, 200); 
		setTimeout(function () { 
			$(".v_h-carousel-items_r .b-carousel-block_r").eq(0).clone().appendTo(".v_h-carousel-items_r"); 
			$(".v_h-carousel-items_r .b-carousel-block_r").eq(0).remove(); 
			$(".v_h-carousel-items_r").css({"top":"0px"});
		}, 200);
	});

	$(".v_b-carousel-button-left_r").click(function(){
		$(".v_h-carousel-items_r .b-carousel-block_r").eq(-1).clone().prependTo(".v_h-carousel-items_r");
		$(".v_h-carousel-items_r").css({"top":"-0px"});	
		$(".v_h-carousel-items_r").animate({"top": "0px"}, 200);
		$(".v_h-carousel-items_r .b-carousel-block_r").eq(-1).remove(); 
	});


  if (window.location.hash === '#services') {
        $('html, body').animate({scrollTop: '530px'}, 800);
    }
    if (window.location.pathname === '/') {
        $('.view_services').click(function() {
            $('html, body').animate({scrollTop: '530px'}, 800);
        });
    }



});

