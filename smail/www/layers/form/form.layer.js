(function() {
	var _form = function(infraform, success, error) {
		$(infraform).ajaxForm({
			dataType: 'json',
			beforeSubmit: function(formData, jqForm, options) {
				infra.noscroll = true;
				infra.check(true);
			},
			success: success,
			error: error
		});
	};
	return {
		tpl: '/layers/form/form.tpl',
		oncheck: function(cb) {
			var layer = this;
			if (layer.config.send == 1) {
				layer.config.send = 2;
			} else if (layer.config.send == 2) {
				layer.config.send = 0;
				infra.reparseLayer(layer);
			}
			cb();
		},
		onshow: function(cb) {
			if (typeof(window) != 'undefined') {
				var layer = this;
				var success = function(responseText, statusText, xhr, form) {
					infra.reparseLayer(layer);
					layer.data = responseText;
					if (layer.data.result) {
						layer.config.send = 1;
						layer.htmlString = '<br><center><b>Сообщение отправлено!</b></center>';
					}
					infra.check();
				};
				var error = function() {
					infra.reparseLayer(layer);
					layer.data = {};
					layer.data.answer = '<b>Ошибка отправки данных, попробуйте связаться с нами по телефону или по почте.</b>';
					infra.check();
				};
				_form($(layer.node).find('form'), success, error);
				$(layer.node).find('form .form_fields input, form .form_fields textarea').keyup(function() {
					// сохранение в куках
					$.cookie(this.name, this.value, { expires: 1 });
				}).each(function(i, el) {
					if ($.cookie(el.name)) {
						$(el).val($.cookie(el.name));
					}
				});
			}
			// обработка отправки формы
			cb();
		},
		config: {
			form: {
				action: '/layers/form/form.njs',
				method: 'POST',
				fields: [
					{
						label: 'Ваше имя',
						name: 'name',
						type: 'text'
					},{
						label: 'Email',
						name: 'email',
						type: 'email'
					},{
						label: 'Телефон',
						name: 'phone',
						type: 'text'
					},{
						label: 'Текст отзыва, сообщения, заявки',
						name: 'text',
						textarea: true
					}
				],
				submit: {
					value: 'Отправить'
				}
			}
		}
	};
}());
