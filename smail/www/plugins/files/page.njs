/* Возвращает html данные переданного файла (doc,tpl) */
var fs = require('fs');
var path = require('path');
var select = require('soupselect').select;
var jsdom = require('jsdom');
var htmlparser = require("htmlparser");
var mkdirp = require('mkdirp');
var office = require('office');

this.init = function(req, res, next, root) {
	var get_tpl = require(path.join(__dirname, '../getTpl/getTpl.njs')).get_tpl;
	var GET = {};
	if (req.query && Object.keys(req.query).length) {
		for (var name in req.query) { if (req.query.hasOwnProperty(name)) {
			var new_name = name.trim();
			if (new_name) { GET[new_name] = req.query[name].trim(); }
		}}
	}
	var orig_file = GET.src.replace(/\..{0,4}$/,'');
	var preview = GET.preview;
	var cache_dir = '/cache/templates/';
	if (orig_file) {
		get_tpl(orig_file.replace(/^\//,''), cache_dir, root, function(err, cache_file) {
			if (cache_file && !err) {
				if (!preview) {
					req.url = '/'+cache_file;
					next();
				} else {
					var file = path.join(root, cache_file);
					//var date = fs.statSync(file).mtime.getTime(); // сделать дату
					var date;
					try {
						date = path.basename(file).match(/^\d+/)[0];
					} catch (e) {}
					fs.open(file, 'r', function(err, fd) {
						if (err) {
							console.log(err, orig_file); res.writeHead(502); res.end('Bad Gateway');
						} else {
							var blen = 1024*2; // максимальная длина превью
							fs.read(fd, new Buffer(blen), 0, blen, null, function(err, bytesRead, buffer) {
								if (err) {
									console.log(err, orig_file); res.writeHead(502); res.end('Bad Gateway');
								} else {
									fs.close(fd);
									var preview = buffer.toString('utf8', 0, blen).trim().split(' ');
									preview = preview.splice(0, preview.length-1).join(' ').trim(); // удалить последее битое слово
									if (preview.indexOf('###cut###') == -1) {
										// удалить последний абзац
										var _data = preview.split(/<\/p>/gim);
										if (_data.length > 1) { preview = _data.splice(0, _data.length-1).join('</p>'); }
									} else {
										preview = preview.replace(/###cut###.+/gim,'').replace(/####cut####.+/gim,'')
									}
									var handler = new htmlparser.DefaultHandler(function(err, dom) {
										// найти первую картинку
										var img, title;
										try {
											img = select(dom, 'img')[0].attribs.src;
										} catch (e) {};
										try {
											title = select(dom, 'h1')[0].attribs.src;
										} catch (e) {};
										// удалить заголовок и все картинки
										preview = preview.split('\n').join(' ');
										preview = preview.replace(/<h1.*?<\/h1>/, '');
										preview = preview.replace(/<img.*?>/gim, '');
										preview = preview.replace(/<img[^>]*?$/gim, ''); // обрезанное изображение
										var ans = {
											preview: preview.trim(),
											date: date,
											img: img,
											title: title
										};
										res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' }); 
										res.end(JSON.stringify(ans, null, "\t"), 'utf-8');
									});
									var parser = new htmlparser.Parser(handler);
									parser.parseComplete(preview);
								}
							});
						}
					});
				}
			} else {
				console.log(err, orig_file); res.writeHead(502); res.end('Bad Gateway');
			}
		});
	} else {
		console.log(err, orig_file); res.writeHead(502); res.end('Bad Gateway');
	}
}
var preparePath = function(src) {
	if (src && (src.indexOf('..') == -1)) {
		src = src.replace(/\/+/g,'/');
		return src;
	}
};

this.init = function(req, res, next, root) {
	/* GET
	 * src - правильный путь до файла
	 * preview - возвращать предпросмотр или нет
	 * cache - путь до общей папки с кэшем
	 */
	var end = function() {
		res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' }); 
		res.end(JSON.stringify(ans, null, "\t"), 'utf-8');
	};
	var GET = {};
	var ans = { "result": 0 };
	if (req.query && Object.keys(req.query).length) {
		var name; for (name in req.query) { if (req.query.hasOwnProperty(name)) {
			var new_name = name.trim();
			if (new_name) { GET[new_name] = req.query[name].trim(); }
		}}
	}
	GET.cache = preparePath(GET.cache);
	GET.src = preparePath(GET.src);
	if (GET.src && GET.cache) {
		var cachedir = path.join(
			GET.cache, GET.src.replace(/^\//,'').replace(/\/$/,'').replace(/\//g,'|')
		);
		load(GET.src, {cache: cachedir, preview: GET.preview}, function(err, data) {
			if (!err) { ans = data; end();
			} else { console.error(err) }
			end();
		}, root);
	} else { end() };
};

var ignore_protocols = [
	RegExp('^mailto:', "gim"),
	RegExp('^http://', "gim"),
	RegExp('^https://', "gim"),
	RegExp('^ftp://', "gim"),
	RegExp('^file://', "gim")
	//RegExp('^/', "gim")
];

/* Загружаем файл, обрабатываем, сохраняем кэш */
var _save = function(filename, cachename, root, tplparse, ext, options, cb) {
	//cache_without_root, origname, cachename, filename, tplparse, cb)
	// загрузить оригинальный файл
	fs.readFile(path.join(root, filename), 'utf-8', function(err, data) {
		if (!err) {
			jsdom.env(data, function(errors, window) {
				try {
					var all = window.document.getElementsByTagName('*');
					// убираем стили и классы
					for (var x = 0; x < all.length; x++) {
						all[x].removeAttribute('style');
						all[x].removeAttribute('class');
						all[x].removeAttribute('STYLE');
						all[x].removeAttribute('CLASS');
					}
					// обрабатываем дурацкие таблицы
					var tables = window.document.getElementsByTagName('table');
					for (var x = 0; x < tables.length; x++) {
						var common1 = tables[x].previousSibling.previousSibling;
						var common2 = tables[x].nextSibling.nextSibling;
						if ((common1.innerHTML.indexOf('####') != -1) && (common2.innerHTML.indexOf('####') != -1)) {
							tables[x].className += " common";
							tables[x].width = "auto";
							common1.innerHTML = '';
							common2.innerHTML = '';
						};
					}
					// картинки
					var imgs = window.document.getElementsByTagName('img');
					for (var x = 0; x < imgs.length; x++) {
						//заменить относительные src
						var src = imgs[x].getAttribute("src").replace(/\?.+$/,''); // вконце бывают вопросы
						var ignore = false;
						for (var i = ignore_protocols.length; --i >= 0;) {
							if (src.search(ignore_protocols[i]) != -1) { ignore = true; break; }
						}
						if (!ignore) {
							if (tplparse) { // возможно картинки лежат рядом с оригиналом
								src = path.join(path.dirname(filename), src);
							} else { // картинки могут лежать рядом с кэшем
								//fs.existsSync(path.join(root, cachename, '..', src))
								src = path.join(cachename, '..', src);
							}
							var width = imgs[x].width;
							var height = imgs[x].height;
							if (width) { src = src + '?w=' + width; }
							if (!width && height) { src = src + '?h=' + height; }
							if (width && height)  { src = src + '&h=' + height; } 
							imgs[x].setAttribute("width", 'auto');
							imgs[x].setAttribute("height", 'auto');
							imgs[x].setAttribute("src", src);
						}
						//добавить class left right для align
						var align = imgs[x].getAttribute("align").toLowerCase();
						if (align == 'left') {
							imgs[x].className += " left";
						} else if (align == 'right') {
							imgs[x].className += " right";
						}
					};
					var htmlString = window.document.getElementsByTagName('body')[0].innerHTML;
					// делаем в одну строку
					htmlString = htmlString.replace(/\s/gim,' ');
					fs.writeFile(path.join(root, cachename), htmlString, 'utf-8', function(err) {
						if (!err) { parse(htmlString, options, cb);
						} else { cb(err); }
					});
				} catch(e) { cb(e); }
			});
		} else { cb(err); }
	});
};

var _loadPreview = function(text, cb) {
	// без cut
};


var _checkCache = function(filename, cachedir, root, cb) {
	/* Кэшированный файл храниться в формате html */
	var ext = path.extname(filename).toLowerCase();
	if (ext != '.tpl') {
		var cachename = path.join(cachedir, path.basename(filename).replace(/\..{0,4}$/,'.html'));
		mkdirp(path.join(root, cachedir), function(err) {
			fs.stat(path.join(root, filename), function(err, stats) {
				if (!err) {
					var origtime = stats.mtime.getTime();
					fs.stat(path.join(root, cachename), function(err, stats) {
						if (!err || (err && (err.code == 'ENOENT'))) {
							var cachetime = 0;
							if (!err) { cachetime = stats.mtime.getTime(); }
							cb(null, (origtime<cachetime), cachename, ext);
						} else { cb(err); }
					});
				} else { cb(err); }
			});
		});
	} else { cb(null, true, filename, ext); }
};

/* Загружает файл и парсит данные файла, кэш */
/* options.cache - длинная директория где будет уже лежать html кэш-файл */
var load = function(filename, options, cb, root) {
	/* нужно ли делать кэш */
	_checkCache(filename, options.cache, root, function(err, cacheExists, cachename, ext) {
		options.cachename = cachename;
		if (!err) {
			if (!cacheExists) {
				console.log('сделать заново кэш');
				if (ext == '.html') {
					_save(filename, cachename, root, true, ext, options, cb);
				} else {
					office.parse(path.join(root, filename), {
						path: path.join(root, options.cache)
					}, function(err, root_cachename) {
						if (!err) {
							var cachename2 = root_cachename.replace(root, '');
							if (cachename2 != cachename) { cb(Error('office parse'));
							} else {
								// пересохранить один и тот же файл
								_save(cachename, cachename, root, false, ext, options, cb);
							}
						} else { cb(err); }
					});
				}
			} else {
				fs.readFile(path.join(root, cachename), 'utf-8', function(err, text) {
					if (!err) { parse(text, options, cb);
					} else { cb(err); }
				});
			}
		} else { cb(err); }
	}); 
};

var getTags = function(text, tag, delimiter) {
	var regExp = new RegExp('####'+tag+'####[\\s\\S]+?####', 'gim');
	var tags = text.match(regExp);
	if (tags) {
		regExp = new RegExp('####'+tag+'####', 'gim');
		return tags[0].replace(regExp,'').replace('####','').trim();
	}
};

/* Парсит данные */
var parse = function(text, options, cb) {
	if (!options.preview) {
		var data = {
			text: "",
			title: "",
			meta: {
				description: "",
				keywords: ""
			}
		};
		text = text.replace(/####cut####/gim,'').replace(/###cut###/gim,'');
		var title = getTags(text, 'title', '####');
		var keywords = getTags(text, 'keywords', '####');
		var description = getTags(text, 'description', '####');
		text = text.replace(/####keywords####[\s\S]+?####/gim,'').replace(/####description####[\s\S]+?####/gim,'').replace(/####title####[\s\S]+?####/gim,'');
		data.text = text;
		data.title = title;
		data.meta.description = description;
		data.meta.keywords = keywords;
		cb(null, data);
	} else {
		text = text.replace(/####keywords####[\s\S]+?####/gim,'').replace(/####description####[\s\S]+?####/gim,'').replace(/####title####[\s\S]+?####/gim,'');
		var date;
		try { date = path.basename(options.cachename).match(/^\d+/)[0];
		} catch (e) {}
		// сократить по cut, если cut нету то сократить по лимиту до первого абзаца
		if (text.indexOf('###cut###') == -1) {
			text = text.slice(0, 1750);
			// удалить последний не полный абзац
			var _data = text.split(/<\/p>/gim);
			if (_data.length > 1) {
				text = _data.splice(0, _data.length-1).join('</p>');
			}
		} else { text = text.replace(/###cut###.+/gim,'').replace(/####cut####.+/gim,'') }
		var handler = new htmlparser.DefaultHandler(function(err, dom) {
			// найти первую картинку
			var img, title;
			try { img = select(dom, 'img')[0].attribs.src;
			} catch (e) {};
			try { title = select(dom, 'h1')[0].attribs.src;
			} catch (e) {};
			// удалить заголовок и все картинки
			text = text.split('\n').join(' ');
			text = text.replace(/<h1.*?<\/h1>/, '');
			text = text.replace(/<img.*?>/gim, '');
			text = text.replace(/<img[^>]*?$/gim, ''); // обрезанное изображение
			var data = {
				preview: text.trim(),
				date: date,
				img: img,
				title: title
			};
			cb(null, data);
		});
		var parser = new htmlparser.Parser(handler);
		parser.parseComplete(text);
	}
};

this.load = load;
this.parse = parse;
