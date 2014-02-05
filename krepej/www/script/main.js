$(document).ready(function(){
	// фотогалереи
	$("a[rel^='prettyPhoto']").prettyPhoto({
		opacity: 0.70,
		allow_resize: false
		});
	
	/*var $sel = $(".imagediv")
	$sel
		.scrollable({
			size:2,
			next:".arrow_right",
			prev:".arrow_left",
			clickable:false,
			item:".gal_item"
		})*/
		
	$("input.searchinput").one('click',function(){
		$(this).val('').css('color','#000000')
		
		})
		
	$(".read_more").click(function(event){
		var $a = $(event.target).closest('.read_more')
		var $container = $a.closest('.slidable_text')

		if($a.hasClass('opened')) {
			$container.find('.dots').show()
			$container.find('.invisible_part').slideUp('fast')
			$a.text('Читать далее').removeClass('opened')
		}
		else {
			$container.find('.dots').hide()
			$container.find('.invisible_part').slideDown('fast')
			$a.text('Скрыть').addClass('opened')
		}
		event.preventDefault()
		})
	
	// нановалидатор
   $("#contactform").submit(function(event){
      if(!$("#input_name").val()) {
         $("#alert").text("Представьтесь, пожалуйста.");
         event.preventDefault();
      }
      else if(!$("#input_email").val() || !$("#input_tel").val()) {
         $("#alert").text("Оставьте, пожалуйста, контактные данные");
         event.preventDefault();
      }
      else if($("#input_email").val() && !/^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[a-z]{2,4}|museum|travel)$/.test($("#input_email").val())) {
         $("#alert").text("Вы ввели некорретный email");
         event.preventDefault();
      }
      else if($("#input_tel").val() && /[^0-9\s-\(\)\+]/.test($("#input_tel").val())) {
         $("#alert").text("Вы ввели некорретный телефон");
         event.preventDefault();
      }else if(!$("#input_title").val()){
	$("#alert").text("Вы не ввели тему сообщения");
         event.preventDefault();
      }
      else if(!$("#comment").val()){
	$("#alert").text("Вы не ввели текст сообщения");
         event.preventDefault();
      }
   });
   
    $("#myform").submit(function(event){
      if(!$("#order_name").val()) {
         $("#alert_order").text("Представьтесь, пожалуйста.");
         event.preventDefault();
      }
      else if(!$("#order_email").val() || !$("#order_tel").val()) {
         $("#alert_order").text("Оставьте, пожалуйста, контактные данные");
         event.preventDefault();
      }
      else if($("#order_email").val() && !/^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[a-z]{2,4}|museum|travel)$/.test($("#order_email").val())) {
         $("#alert_order").text("Вы ввели некорретный email");
         event.preventDefault();
      }
      else if($("#order_tel").val() && /[^0-9\s-\(\)\+]/.test($("#order_tel").val())) {
         $("#alert_order").text("Вы ввели некорретный телефон");
         event.preventDefault();
      }else if(!$("#order_title").val()){
	$("#alert_order").text("Вы не ввели тему сообщения");
         event.preventDefault();
      }
      else if(!$("#order_comment").val()){
	$("#alert_order").text("Вы не ввели текст сообщения");
         event.preventDefault();
      }
   });	
	
	$("#image_a").mouseover(function(event){		
		$("#lupa").fadeIn('fast');
	})
	
	$("#image_a").mouseout(function(event){		
		$("#lupa").fadeOut('fast');
	})
	
	$('.order_product').click(function() {
		$('#shadow').fadeIn();
		$('#order_phone').fadeIn();
		return false;
		});
	$('.hide_order').live('click', function() {
		$('#order_phone').fadeOut();
		$('#shadow').fadeOut();
		return false;
		});	
	
   
});
