var path = require('path');
var Mustache = require("mustache");

/*Функция проверки email.*/
function isEmail(strEmail) {
	var validRegExp = /^[^@]+@[^@]+\.[^@]{2,}$/gim;
	return validRegExp.test(strEmail);
}

this.init = function(req, res, next, root) {
	var send = function() {
		res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' }); 
		res.end(JSON.stringify(ans, null, "\t"), 'utf-8');
	};
	var sendMail = require(path.join(root, '/plugins/node-mail')).sendMail;
	var ans = {
		answer: ''
	};
	var POST = req.body;
	if (POST && Object.keys(POST).length) {
		for (var name in POST) { if (POST.hasOwnProperty(name)) {
			POST[name] = POST[name].trim();
		}}
		if (!POST.name || !POST.email || !POST.phone || !POST.text) {
			ans.answer += 'Не заполнены все данные формы.<br>';
		}
		if (!isEmail(POST.email)) {
			ans.answer += 'Введен неверный адрес электронной почты.<br>';
		}
		if (!ans.answer) { // если нет ошибок принятых данных
			ans.answer = 'Ошибка отправки сообщения, попробуйте связаться по почте или по телефону.<br>';
			var mailctx = {}; // составить конфиг
			mailctx.browser = req.headers['user-agent'];
			mailctx.ip = req.headers['x-forwarded-for'] ? req.headers['x-forwarded-for'] : req.connection.remoteAddress;
			mailctx.date = new Date().toLocaleString();
			mailctx.text = POST.text;
			mailctx.phone = POST.phone;
			mailctx.email = POST.email;
			mailctx.name = POST.name;
			// распарсить шаблон письма, сделать бэкап,
			// загрузить системный конфиг и отправить
			sendMail({
				ctx: mailctx,
				tpl: path.join(root, '/data/mail.tpl'),
				bkp: path.join(root, '/data/.Письма с сайта/'),
				conf: path.join(root, '/data/.mail.json')
		  	}, function(err) {
				if (!err) {
					ans.answer = '';
					ans.result = true;
				} else { console.log(err); }
			  	send();
			});
		} else { send(); }
	} else { send(); }
};
