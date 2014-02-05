$( function(){

    $(".datepicker").keypress (
        function(event)
        {
            var key, keyChar;
            if(!event) var event = window.event;

            if (event.keyCode) key = event.keyCode;
            else if(event.which) key = event.which;


            if(key==null || key==0 || key==8 || key==13 || key==37 || key==39 || key==46 || key==9) return true;
            keyChar=String.fromCharCode(key);

            if(!/\d/.test(keyChar))	return false;

        });



    // вызов дата пикера
    $( ".datepicker" ).datepicker( {
        beforeShow: function( item, data){
            checkdates();
        },
        firstDay: 1,
        onChangeMonthYear: function( item, data){
            checkdates();
        },
    } );


    // функция обрабатывающая даты
    function checkdates(){

        setTimeout( function(){

            // переменная closedDay - это масив закрытх дней
            var closedDay = ["04.02.2014","03.02.2014","05.02.2014","06.02.2014","11.02.2014","10.02.2014","10.03.2014","12.03.2014","11.03.2014"],
                // specialDays - масив специальных дней
                specialDays = ["23.02.2014","24.02.2014","25.02.2014","26.02.2014","26.03.2014","25.03.2014"],
                monthDay = $('.ui-datepicker-calendar td');

            monthDay.each( function(){

                var strLine ="",
                    curYear =  $(this).attr('data-year'),
                    curMonth = parseInt($(this).attr('data-month'))+1,
                    curDay = $(this).children().text(),
                    i;
                if(curDay<10){
                    curDay = "0"+curDay
                }
                if(curMonth<10){
                    curMonth = "0"+curMonth
                }
                var  curDates = strLine + curDay +"."+curMonth+'.'+curYear;


                for(i=0; i < specialDays.length; i++){

                    if(curDates == specialDays[i]){

                        $(this).children().addClass('special__days');

                    }


                }


                for(i=0; i < closedDay.length; i++){

                    if(curDates == closedDay[i]){
                        var curDatesText = $(this).children().text();
                        $(this).children().remove();
                        $(this).removeClass();
                        $(this).addClass('ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled')
                        $(this).html('<span class="ui-state-default">'+curDatesText+'</span>');
                    }


                }

            });


        },1)

    }





    $('.addSimplas').click(function(){
		var i = 1;
		$('.cart_block').each(function(index){
			i++;
		});     
	   
	   var zagotovok = $('<div class="cart_block"><span class="closeBut">close</span><span class="priceCart"><b>7500</b> Р</span><div class="order_info"><h2>Выходные в Коломне: программа на двоих с проживанием в отеле «40-й Меридиан Арбат»</h2><div class="select_date">  <input type="text" class="datepicker" placeholder="Выберите дату"></div><div class="room_type"><select name="params['+i+'][name]"><option>Выберите тип номера</option><option value="1">Стандартный двухместный номер с 1 кроватью</option><option value="2">Стандартный двухместный номер с 2 кроватями</option></select><div class="checkbox_line"><input name="params['+i+'][bed]" id="bed'+i+'" type="checkbox" class="addbed"><label for="bed'+i+'">Программа и дополнительная кровать для третьего человека + 2500 рублей</label></div><div class="checkbox_line"><input name="params['+i+'][bed-children]" id="child_bed'+i+'" type="checkbox"><label for="child_bed'+i+'">Дополнительная детская кровать для детей младше 3-ех лет – бесплатно</label></div></div></div><div class="servises"><p class="breakfast">в стоимость каждого номера входит завтрак</p><p class="freeWife">бесплатный доступ в интернет на территории отеля</p><p class="carParking">бесплатная парковка на территории отлея</p></div></div>');

        zagotovok.insertBefore($(this).parent());

        zagotovok.find( ".datepicker" ).datepicker( {
            beforeShow: function( item, data){
                checkdates();
            },
            firstDay: 1,
            onChangeMonthYear: function( item, data){
                checkdates();
            },
        } );




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
