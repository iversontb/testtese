$(function(){
	
	if( $( 'input[type="checkbox"]' ).length ){
		var checkItem = new CheckItem();
	}
	
	// закрытие попапа
	$( '.closeButton' ).click( function(){
		$( '.popUpContainer' ).fadeOut();
	});

	// дествия по клику на добавить видео
	$( '.addVideo' ).click( function(){

		
		var videoBlock = $('<!--block--><div class="block videReviews"><!--lineContainer--><div class="lineContainer">				<!--inputWrap--><div class="inputWrap"><input type="text" placeholder="Скопируйте ссылку на ролик с YouTube и вставьте в это поле"><div class="clearButton" title="cleare">cleare</div></div><!--/inputWrap--><button class="addButton videoAdd">add</button></div><!--/lineContainer--><!--lineContainer--><div class="lineContainer"><div class="inputWrap longInput"><input type="text" placeholder="Введите комментарий к видео"></div></div><!--/lineContainer--></div>		<!--/block-->');
		videoBlock.insertAfter($( this ).parent().parent());
				
		return false;
	});

	// дествия по клику на добавить видео
	$( '.addPhoto' ).click( function(){
		var _id = Math.round(Math.random($( '.inputFileVal' ).attr('id'))*1000);
		var videoBlock = $('<!--block--><div class="block photoReviews"><div class="lineContainer"><div class="type_file"><input type="file" size="53" class="inputFile" onchange=document.getElementById("'+ _id +'").value=this.value /><div class="fonTypeFile"></div><input type="text" class="inputFileVal" placeholder="Выберите фото, чтобы прикрепить к комментарию" readonly id="'+ _id +'" /><div class="clearButton" title="cleare">cleare</div></div><button class="addButton photoButton">add</button></div><!--lineContainer--><div class="lineContainer"><div class="inputWrap longInput"><input type="text" placeholder="Введите комментарий к фото"></div></div><!--/lineContainer--></div><!--/block-->');
	//	$( this ).parent().parent().next().prepend(videoBlock);
		videoBlock.insertAfter($( this ).parent().parent());
		return false;
	});
		

	$( '.photoButton' ).live('click',function(){		
		var _id = Math.round(Math.random($( '.inputFileVal' ).attr('id'))*1000);
		var _block = $('<!--block--><div class="block photoReviews"><div class="lineContainer"><div class="type_file"><input type="file" size="53" class="inputFile" onchange=document.getElementById("'+ _id +'").value=this.value /><div class="fonTypeFile"></div><input type="text" class="inputFileVal" placeholder="Выберите фото, чтобы прикрепить к комментарию" readonly id="'+ _id +'" /><div class="clearButton" title="cleare">cleare</div></div><button class="addButton photoButton">add</button></div><!--lineContainer--><div class="lineContainer"><div class="inputWrap longInput"><input type="text" placeholder="Введите комментарий к фото"></div></div><!--/lineContainer--></div><!--/block-->');
		 _block.insertAfter($( this ).parent().parent());
		return false;
	});
	
	$( '.videoAdd' ).live('click',function(){		
		var _id = Math.round(Math.random($( '.inputFileVal' ).attr('id'))*1000);
		var _block = $('<!--block--><div class="block videReviews"><!--lineContainer--><div class="lineContainer">				<!--inputWrap--><div class="inputWrap"><input type="text" placeholder="Скопируйте ссылку на ролик с YouTube  и вставьте в это поле"><div class="clearButton" title="cleare">cleare</div></div><!--/inputWrap--><button class="addButton videoAdd">add</button></div><!--/lineContainer--><!--lineContainer--><div class="lineContainer"><div class="inputWrap longInput"><input type="text" placeholder="Введите комментарий к видео"></div></div><!--/lineContainer--></div>		<!--/block-->');
		 _block.insertAfter($( this ).parent().parent());
	
		return false;
		
	});	
	
	// очистка полей
	$( '.clearButton' ).live('click',function(){
		$( this ).parent().parent().parent().remove();
	});
		
	//проверка на пустоту
	$( '.popUpContainer' ).submit( function(){

		if( !$( '.popUpContainer textarea' ).val()){
			$( '.error' ).css({ 'display' : 'block'});
			return false;
		}

	});
	
	//проверка на пустоту
	$( '.propouseForm' ).submit( function(){
			if( !$( '.inputWrap input' ).val()){
				$( '.block .erorrInp' ).css({ 'display' : 'block'});
				return false;		
			}
	});

	//прячу ошибку при фокусе
	$( '.inputWrap input' ).focus( function(){
		$( '.block .erorrInp' ).css({ 'display' : 'none'});
	});
	
	// прячу ошибку при фокусе
	$( '.popUpContainer textarea' ).focus( function(){
		$( '.error' ).css({ 'display' : 'none'});
	});
	
	// вывод назания фалй при нажатии кнопки обзор
	$( '.inputFile' ).change( function(){

		var str = $( this ).val().replace(/^.*\\/,'');
		$( this ).next().next().val(str);
	})
	
	// задаю высоту серого блока
	var  categoryWrapHeight =	$( '.categoryWrap' ).height();
	$( '.subCategory' ).css({ 'min-height': categoryWrapHeight});
	$( '.emptySub' ).css({ 'height': categoryWrapHeight});
	
	
	// функция нажатия на категорию чекбокс
	$( '.categoryWrap .radioContainer input[type="checkbox"]' ).change(function(){

		var _id = $( this ).attr( 'id' ),
				_this=$( '.subCategory .listWrap' ).eq(_id);
		if(  $( this ).attr('checked')=='checked'){

			$( '.emptySub' ).css({ 'display': 'none'});
			$( '.categoryWrap .radioContainer input[type="checkbox"]' ).parent().removeClass('active');
			$(this).parent().addClass('active');

		
			$( '.subCategory  .listWrap' ).css({ 'display': 'none' });
			
			_this.fadeIn();
			
			
			
			
//			var _cat = $( this ).next().html();
//			$(".selected dl").append('<dd><a href="#" id="'+_id+'">'+_cat+'</a></dd>');
			
			
		}

				
	});
	

	
	
	
	
	
	

	// функция нажатия на подкатегорию
/*	$( '.subCategory .radioContainer input[type="checkbox"]' ).click( function(){
		var _cat = $( this ).next().html();
		$(".selected dl").append('<dd><a href="#">'+_cat+'</a></dd>');	
	});*/
	
	// функиця нажатия на категрию радиокнопка
	$( '.categoryWrap .radioContainer input[type="radio"]' ).click(function(){
		$( '.emptySub' ).css({ 'display': 'none'});
		$( '.categoryWrap .radioContainer input[type="radio"]' ).parent().removeClass('active');
		$(this).parent().addClass('active');
		var _id = $( this ).attr( 'id' ),
				_this=$( '.subCategory .listWrap' ).eq(_id);

		$( '.subCategory  .listWrap' ).css({ 'display': 'none' });
		
		_this.fadeIn();
		$('.selected  dd').remove();
		var _cat = $( this ).next().html();
		$(".selected dl").append('<dd><span>'+_cat+'</span></dd>');
		$( '.subCategory  .radioContainer input[type="radio"]' ).attr('checked',false);
				
	});
	
	// функция нажатия на подкатигорю радиокнопку
	$( '.subCategory .radioContainer input[type="radio"]' ).click( function(){
		var _cat = $( this ).next().html();
		$('.selected  dd').remove();
		$(".selected dl").append('<dd><span>'+_cat+'</span></dd>');	
	});
	

	// очистка снять выбор
	$( '.clearfilter' ).click( function(){
		$( '.categoryWrap .radioContainer input[type="checkbox"]' ).parent().removeClass('active');
		$( '.subCategory .listWrap' ).css({ 'display': 'none'});
		$( '.emptySub' ).css({ 'display': 'table-cell'});
		$( '.selected dd' ).remove();
		$( '.radioContainer input[type="checkbox"]' ).attr('checked',false);
	});	
	
	// удалении выборранного элемента
	$(".selected dd").live("click", function(){
		$( this ).remove();
		$( '.categoryWrap .radioContainer input[type="radio"]' ).parent().removeClass('active');
		$( '.subCategory .listWrap' ).css({ 'display': 'none'});
		$( '.emptySub' ).css({ 'display': 'table-cell'});
		$( '.radioContainer input[type="radio"]' ).attr('checked',false);	
	});
	
	// нажатие на радиокнопку Нет подходящего типа проблем
	$( '.footerCont .radioContainer input[type="radio"]' ).click( function(){
		$( '.subCategory .radioContainer input[type="radio"]' ).attr('checked',false);
		$('.selected  dd').remove();
		var _cat = $( this ).next().html();
		$(".selected dl").append('<dd><span>'+_cat+'</span></dd>');

	});	

	// функция нажатия на кнопку отметить все
	$( '.selectAll' ).click( function(){
		$('.selected  dd').remove();
		$( '.radioContainer input[type="checkbox"]' ).attr('checked',true);
		$(".selected dl").append('<dd><span class="allSelected">Выбрано все</span></dd>');
	});
	
	// удалить выбранно все
	$( '.allSelected' ).live('click',function(){	
		$( '.radioContainer input[type="checkbox"]' ).attr('checked',false);

	});
	
	
});

var CheckItem = function() {
	
	this.init();
}
	CheckItem.prototype = {
		init: function(){
			var self = this;
			
			this.controls();
		},
		controls: function() {
			var self = this;
			
			// удалении выборранного элемента
            $(".selected dd").live("click", function(){

				$( '#' + $( this ).find( 'span span' ).text() ).trigger('click');	
			});
            $(".filterPop input[type='checkbox']").live("change", function(){

				var isChecked = false,
					curIndex = 0;
				
				if( $( this ).parents( '.listWrap' ).length ) {

					curIndex = $( this ).parents( '.listWrap' ).index();
					
					$( this ).parents( '.listWrap' ).find( 'input' ).each( function(){
						if( $( this ).attr( 'checked' ) == 'checked' ) {
							isChecked = true;
							return false;
						}
					} );
					if ( !isChecked ) {
						$( '.categoryWrap input' ).eq( curIndex ).removeAttr('checked');

					} else {
						$( '.categoryWrap input' ).eq( curIndex ).attr('checked','checked');
					}
				}
				
				var resultstr = self.getFilterString();
				$( '.selected dd' ).remove();
				$( '.selected dl' ).append(resultstr);
			});
		},
		getFilterString: function() {
			var result = '';
			
			$( '.categoryWrap input' ).each( function( i ) {
				var tempStr = '';
				
				if( $( this ).attr( 'checked' ) == 'checked' ) {
					
					$( '.listWrap' ).eq( i ).find('input').each( function( j ) {
							var curElem = $( this );
							if( curElem.attr( 'checked' ) == 'checked' ) {
								tempStr += '<dd><span>'+ curElem.next().html() +'<span>'+ curElem.attr( 'id' ) +'</span></span></dd>'
							}
					} );
					if( tempStr == '' ) {
						tempStr += '<dd><span>'+ $( this ).next().html() +'<span>'+ $( this ).attr( 'id' ) +'</span></span></dd>'
					}
				} else {
					$( '.listWrap' ).eq( i ).find('input').removeAttr('checked');
				}
				result += tempStr;
			} );
			return result;
		}
	}