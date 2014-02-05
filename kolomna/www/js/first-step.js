$(document).ready(function(){		
	$('.cartForm').on('click', '.button-first-step',function(){	
		var accept = true;
		$('.cart_block').each(function(index){
			if($(this).find('.nice-select select').val() == 'Выберите тип номера'){				
				accept = false;
			}			
		});
		if(accept){
			$('.first-step-button').click();
		}else{
			alert('Проверьте правильность выбора типа номеров');
			return false;
		}		
	});	
});