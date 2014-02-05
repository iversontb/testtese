(function() {
	var config = {
		show: false,
		popup: {
			title: 'Форма контактов'
		},
		init: function() {
			$(".send_comment").off('click.smile')
					.on('click.smile', function () {
				show();
			});
			$(".send_comment_close").off('click.smile')
					.on('click.smile', function () {
				hide();
			});
		}
	};
	var show = function() {
		config.show = true;
		infra.noscroll = true;
		infra.check();
	};
	var hide = function() {
		config.show = false;
		infra.noscroll = true;
		infra.check();
	};
	return {
		tpl: '/layers/popup/popup.tpl',
		config: config,
		onshow: function(cb) {
			var layer = this;
			if (typeof(window) != 'undefined') {
				$(layer.node).show();
				$(".popup .popup_close").off('click.smile')
						.on('click.smile', function () {
					$(layer.node).hide();
					hide();
				});
				$(document).off('keyup.smile');
				if (config.show) {
					var div = $(layer.tag + ' .popup');
					div.center();
					div.draggable();
					$(document).on('keyup.smile', function(e) {
						// Esc
						if (e.keyCode == 27) {
							hide();
						}
					});
				}
			}
			cb();
		},
		oncheck: function(cb) {
			var layer = this;
			if (!config.show) {
				if (typeof(window) != 'undefined') {
					infra.reparseLayer(layer);
					layer.htmlString = ' ';
				}
			} else if (layer.htmlString == ' ') {
				infra.reparseLayer(layer);
			}
			cb();
		}
	};
}());
