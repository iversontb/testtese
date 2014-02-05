$(document).ready(function() {	
	$('#email').blur(function() {		
		if($(this).val() != '') {
            var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if(pattern.test($(this).val())){                
                $(this).next('.proof').show();				
				$(this).removeClass('error');				
            } else {                
				$(this).addClass('error');
				$(this).next('.proof').hide();				
            }
        } else {
            $(this).addClass('error');            
        }		
	});
	
	$('#reemail').blur(function() {		
		if($(this).val() != '') {
			var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if(($(this).val()==$('#email').val()) && (pattern.test($(this).val()))){                
                $(this).next('.proof').show();
				$(this).removeClass('error'); 
            } else {
                $(this).addClass('error');
				$(this).next('.proof').hide();				
            }
        } else {
            $(this).addClass('error');            
        }		
	});
	
	$('.big_red_button').click(function(){
		if(($('#lastName').val()=='') || ($('#name').val()=='') || ($('#phone').val()=='') || ($('#email').val()=='') || ($('#reemail').val()==''))
		{
			alert("Все поля обязательны для заполнения"); 
			return false;
		}else{
			if(($('#email').hasClass('error')) || ($('#reemail').hasClass('error'))){
				alert('Проверьте правильноть заполнения E-mail');
			}else{
				$('.step2-form-submit').click();
			}
			return false; 
		}  
	});

});