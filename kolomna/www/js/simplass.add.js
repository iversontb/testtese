$( function(){
    $('.addSimplas').click(function(){
		var i = 1;
		$('.cart_block').each(function(index){
			i++;
		});     
	   
	   var zagotovok = $('<div class="cart_block"><span class="closeBut">close</span><span class="priceCart"><b>7500</b> Р</span><div class="order_info"><h2>Выходные в Коломне: программа на двоих с проживанием в отеле «40-й Меридиан Арбат»</h2><div class="select_date">Заезд 15 Февраля, 14:00<br />Выезд 16 Февраля, 16:00<br/></div><div class="room_type"><select name="params['+i+'][name]"><option>Выберите тип номера</option><option value="1">Стандартный двухместный номер с 1 кроватью</option><option value="2">Стандартный двухместный номер с 2 кроватями</option></select><div class="checkbox_line"><input name="params['+i+'][bed]" id="bed'+i+'" type="checkbox" class="addbed"><label for="bed'+i+'">Программа и дополнительная кровать для третьего человека + 2500 рублей</label></div><div class="checkbox_line"><input name="params['+i+'][bed-children]" id="child_bed'+i+'" type="checkbox"><label for="child_bed'+i+'">Дополнительная детская кровать для детей младше 3-ех лет – бесплатно</label></div></div></div><div class="servises"><p class="breakfast">в стоимость каждого номера входит завтрак</p><p class="freeWife">бесплатный доступ в интернет на территории отеля</p><p class="carParking">бесплатная парковка на территории отлея</p></div></div>');
//       console.log(zagotovok);

       zagotovok.insertBefore($(this).parent());

       zagotovok.find('select' ).each( function(){
           new NiceSelect( $( this ) );
       } );
	   sum();
       return false;
    });
	
	$('.cartForm').on('click','.addbed', function(){
		sum();
	});
	
	$('.cartForm').on('click','.closeBut', function(){
		$(this).parent().remove();
		sum();
	});
   
    function sum(){
		var sum = 0;
		var total = 0;
		$('.cart_block').each(function(index){
			sum = 7500;
			if($(this).find('.addbed').prop("checked")){
				sum = sum + 2500;
			}
			total = total + sum;
		});
		$('.price span').text(total);
		$('#total').val(total);
    }

  

});
