<form class='contacts_form' action='{{config.form.action}}' method='{{config.form.method}}'>
	<div class='form_fields'>
	{{#config.form.fields}}
		{{#label}}
			<label>
				{{label}}
			</label>
		{{/label}}
		{{^textarea}}
			<input name='{{name}}' class='border_radius {{class}}' type='{{type}}'>
		{{/textarea}}
		{{#textarea}}
			<textarea name='{{name}}' class='border_radius {{class}}'></textarea>
		{{/textarea}}
	{{/config.form.fields}}
	</div>
	<b class='form_answer'>{{{data.answer}}}</b>
	<div class='border_radius submit'>
		<input name='{{config.form.submit.name}}' class='border_radius {{config.form.submit.class}}' value='{{config.form.submit.value}}' type='submit'>
	</div>
</form>
