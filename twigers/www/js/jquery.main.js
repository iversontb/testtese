var isMove = false;
$(function(){

    $( '.tabsContainer' ).css({ 'display': 'none' });
    $( '.first' ).css({ 'display': 'block' });

    $('.tabs > li > span').click( function(){

        $('.tabs > li > span').removeClass('active');
        $(this).addClass('active');
        var _id = $( this).parent().attr( 'id' ),
            _this=$( '.tabsContainer ' ).eq(_id);
        $( '.tabsContainer' ).css({ 'display': 'none' });
        _this.fadeIn();
        return false;


    });




    $( '.yourTown dd a' ).click( function(){
		$( '.changeTown .inputWrap' ).fadeIn();
		$( '.changeTown .inputWrap input' ).focus();
		return false;
	});
	$( '.changeTown .inputWrap input' ).blur( function(){
		$( '.changeTown .inputWrap' ).fadeOut();
	});


	// инициализация Cusel
	var params = {
		changedEl: ".selectWrap select",
		scrollArrows: true
	}
	cuSel(params);
	
	$( '.new' ).click(function () {
		$( this ).fadeOut();
		$( this ).next().slideDown();
	});

	$( '.close' ).click(function () {
		$( this ).parent().prev().fadeIn();
		$( this ).parent().slideUp();
	});
		

	$('.leaveInfo').submit(function(){
		if ($('.addPhoto > .inputWrap input').val() == ""){
			$('.addPhoto > .inputWrap input').parent().css('background','url(img/focus-back.png)');
			$('.addPhoto > .inputWrap input').parent().css('box-shadow','none');			
			return false;
		}

	});

	$(".conteainer.type5.trenders  .addPhoto > .inputWrap input").focus(function () {
		$(this).parent().css('background','none');
		$(this).parent().css('background','#55a222');
		$(this).parent().css('box-shadow','inset 0px 5px 10px 2px #43721F');
 });	
 
	$(".conteainer.type5.trenders  .addPhoto > .inputWrap input").blur(function () {
		$(this).parent().css('background','none');
		$(this).parent().css('background','#55a222');
		$(this).parent().css('box-shadow','inset 0px 5px 10px 2px #43721F');
  }); 
	$(".conteainer.type5.twigi  .addPhoto > .inputWrap input").focus(function () {
		$(this).parent().css('background','none');
		$(this).parent().css('background','#00a06a');
		$(this).parent().css('box-shadow','inset 0px 5px 10px 2px #2f6b40');
 });		
	$(".conteainer.type5.twigi  .addPhoto > .inputWrap input").blur(function () {
		$(this).parent().css('background','none');
		$(this).parent().css('background','#00a06a');
		$(this).parent().css('box-shadow','inset 0px 5px 10px 2px #2f6b40');
  }); 
	$(".conteainer.type5.rate  .addPhoto > .inputWrap input").focus(function () {
		$(this).parent().css('background','none');
		$(this).parent().css('background','#449dad');
		$(this).parent().css('box-shadow','inset 0px 5px 10px 2px #2c758b');
 });		
	$(".conteainer.type5.rate  .addPhoto > .inputWrap input").blur(function () {
		$(this).parent().css('background','none');
		$(this).parent().css('background','#449dad');
		$(this).parent().css('box-shadow','inset 0px 5px 10px 2px #2c758b');
  }); 		
		
	
	$(".twigSelect span	").click(function () {
		if( $(this).next().css('display')=="none"){
			 $(this).next().slideDown();
			 $(this).addClass('active');
		}
		else{
			 $(this).next().slideUp();
			 $(this).removeClass('active');			 
		}
  }); 
	$(".twigSelect ul	li ul").mouseleave( function(){
		$(this).slideUp();
		$(this).prev().removeClass('active');
	});
		
	$( '.logIn' ).click( function(){
		$( '.logInWrap' ).fadeIn();
	});
	
	$( '.closePop' ).click( function(){
		$( '.popupWrap' ).fadeOut();
	});	
	
	
/*	$( '.UserType li span' ).click( function(){
		$( '.UserType li span' ).removeClass( 'active' );
		$( this ).addClass( 'active' );
		if($( '.pimtuk' ).css('left')=="-20px"){
			if(isMove == false){
				isMove = true;
				$( '.pimtuk' ).animate({
					"left": "+=90px"
				}, 200 );
				$( '.polzunok' ).animate({
					"left": "+=85px"
				}, 200 );		
			}
			isMove = false;
		}
		else{
			if(isMove == false){
				$( '.pimtuk' ).animate({
					"left": "-=90px"
				}, 200 );
				$( '.polzunok' ).animate({
					"left": "-=85px"
				}, 200 );			
			}
			isMove = false;
		}
	});*/
	
	
	$( '.slideWrap' ).click( function(){
		if( $( this ).prev().css( 'display' )=="none"){
			$( this ).prev().slideDown();
			$( this ).children('.arrowUp').css({ 'background' : 'url(img/arrow-top.png)' });
			$( this ).children('span').fadeOut();
		}
		else{
			$( this ).prev().slideUp();
			$( this ).children('.arrowUp').css({ 'background' : 'url(img/arrow-bottom.png)' });
			$( this ).children('span').fadeIn();
		}
	});

    $(function(){
        $( '.gallery' ).jCarouselLite({
            btnNext: ".next",
            btnPrev: ".prev",
            visible: 4
        });
    });




    // инициализация маленькой галереи
    loadLightBox( $( '.miniGallWrap .preview li a' ).eq(0)  );

    $( '.miniGallWrap .preview' ).on( 'click', 'li a', function() {
        loadLightBox( $( this ) );
        return false;
    } );





});


// загрузка лайтбокс
var loadLightBox = function(obj){

    var srcAttr = obj.children().attr('src'),
        hrefAttr = obj.attr('href');

    $( '.imgBigWrap a' ).remove();
    $( '.imgBigWrap' ).append( '<a href="'+ hrefAttr +'"><img src="'+ srcAttr +'"  height="282" width="228" alt=""></a>' );

//    $( '.imgBigWrap a' ).lightBox( {
//        txtImage: 'Изображение',
//        txtOf: 'из'
//    } );

};