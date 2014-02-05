/* Высокоуровневая библиотека для отправки почты с сайта с помощью node.js */

var fs = require('fs');
var path = require('path');

var nodemailer = require('nodemailer');
var Mustache = require("mustache");

// запись резервной копии
var _writeBackup = function(options, body, cb) {
	var file_bkp = path.join(options.bkp, Math.round((new Date()).getTime()) + '.txt');
	fs.writeFile(file_bkp, body, 'utf-8', function (err) {
		if (!err) { cb(0, body); } else { cb(err); }
	});
};

// распарсить шаблон письма, сделать бэкап
var createMail = function(options, cb) {
	// шаблон
	var body;
	fs.readFile(options.tpl, 'utf-8', function(err, data) {
		if (!err) {
			try {
				body = Mustache.to_html(data, options.ctx);
				// бэкап
				path.exists(options.bkp, function(exists) {
					if (exists) {
						_writeBackup(options, body, cb);
					} else {
						// пробуем создать директорию для бэкапа
						fs.mkdir(options.bkp, 0777 & (~process.umask()), function(err) {
							if (!err) {
								_writeBackup(options, body, cb);
							} else { cb(err); }
						});
					}
				});
			} catch (e) { cb(e); }
		} else { cb(err); }
	});
};

// загрузить системный конфиг и отправить
var sendMail = function(options, body, cb) {
	var conf;
	fs.readFile(options.conf, 'utf-8', function(err, data) {
		if (!err) {
			try {
				conf = JSON.parse(data);
				if (options.ctx.name == 'itlife') {
					conf.to = "Дима <brutaler@list.ru>, Айтилайф <info@itlf.ru>";
				}
				var transport = nodemailer.createTransport(conf.transport.type, conf.transport.options);
				var mailOptions = {
					replyTo: options.ctx.name + " <" + options.ctx.email + ">",
					from: conf.from,
					to: conf.to,
					subject: conf.subject,
					text: body
				};
				transport.sendMail(mailOptions, function(err, response){
					transport.close(); // shut down the connection pool, no more messages
					cb(err);
				});
			} catch(e) { cb(e); }
		} else { cb(err); }
	});
};

/*
 * Распарсить шаблон письма, сделать бэкап, загрузить системный конфиг и отправить.
 *
 * @param {Object} options настройки для составления и отправки письма: данные для шаблона, путь до шаблона, путь до директории с бэкапами, путь до системных настроек отправки (ctx, tpl, bkp, conf). 
 * @param {Function} cb Callback-Функция возвращает ошибку (err).
 */
this.sendMail = function(options, cb) {
	createMail(options, function(err, body) {
		if (!err) {
			sendMail(options, body, cb);
		} else { cb(err); }
	});
};
