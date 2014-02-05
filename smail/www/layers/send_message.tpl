
<div class='popup border_radius box_shadow gradient'>
    <div class='popup_close border_radius'>x</div>
    <div class='popup_header'>Форма контактов</div>
	 <div class='popup_body'>
		<form class='contacts_form' action='/layers/form/form.njs' method='POST'>
			<div class='form_fields'>
				<label>Ваше имя</label>
				<input name='name' class='border_radius' type='text'>

				<label>Email</label>
				<input name='email' class='border_radius' type='email'>

				<label>Телефон</label>
				<input name='phone' class='border_radius' type='text'>

				<label>Текст отзыва, сообщения, заявки</label>
				<textarea name='text' class='border_radius'></textarea>
			</div>
			<b class='answer'></b>
			<div class='border_radius submit'>
				<input class='border_radius' value='Отправить' type='submit'>
			</div>
		</form>
		<script>
			$(function() {
				var infraform = $('.contacts_form');
				var ans_elem =  $('.contacts_form .answer');
				var error_message = '<b>Ошибка отправки данных, попробуйте связаться с нами по телефону или по почте.</b>';
				var success_message = '<br><center><b>Сообщение отправлено!</b></center>';
				_form(infraform, ans_elem, success_message, error_message);
			});
		</script>
	 </div>
    <div class='popup_footer'></div>
</div>
