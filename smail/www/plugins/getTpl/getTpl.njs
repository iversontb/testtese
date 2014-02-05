// передается путь до статьи без расширения
//
// смотрим есть ли такой файл
// если есть для него кэш и файл не старше кэша, возвращаем кэш
// иначе
//
// если doc, docx, odt ..
// если html, получаем все что есть в body, если body нет - все что есть в html исключая head и body
//
// кэшируем результат
// возвращаем результат

var fs = require('fs');
var exec = require('child_process').exec;
var path = require('path');
var mkdirp = require('mkdirp');
var rimraf = require('rimraf');
var glob = require('glob');
var jsdom = require('jsdom');

var ignore_protocols = [
	RegExp('^mailto:', "gim"),
	RegExp('^http://', "gim"),
	RegExp('^https://', "gim"),
	RegExp('^ftp://', "gim"),
	RegExp('^file://', "gim"),
	RegExp('^/', "gim")
];

this.get_tpl = function(orig_dir_file, cache_dir, root, cb) {
	// парсит html, правит src, удаляет стили, берет body
	var write_html = function(input_file, output_file, cb) {
		fs.readFile(input_file, 'utf-8', function(err, data) {
			if (!err) {
				jsdom.env(data, function(errors, window) {
					try {
						var all = window.document.getElementsByTagName('*');
						// убираем стили и классы
						for (var x = 0; x < all.length; x++) {
							all[x].removeAttribute('style');
							all[x].removeAttribute('class');
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
							var src = imgs[x].getAttribute("src");
							var ignore = false;
							for (var i = ignore_protocols.length; --i >= 0;) {
								if (src.search(ignore_protocols[i]) != -1) { ignore = true; break; }
							}
							if (!ignore) {
								src = path.join(cache_dir_orig_dir, src);
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
						// удалить cut, записать кэш
						var htmlString = window.document.getElementsByTagName('body')[0].innerHTML.replace('####cut####','');
						fs.writeFile(output_file, htmlString.replace('###cut###',''), 'utf-8', function(err) {
							cb(err);
						});
					} catch(e) { cb(e); }
				});
			} else { cb(err); }
		});
	};
	var get_doc = function() {
		var command = "unoconv --format=html --outputpath='" + root_cache_dir_orig_dir +"' '"+ root_orig_dir_file +"'";
		exec(command, function (error, stdout, stderr) {
			if (!error) {
				// расширение будет html
				root_cache_dir_orig_dir_file2 = path.join(root, cache_dir_orig_dir_file.slice(0,-ext.length)+'.html');
				write_html(root_cache_dir_orig_dir_file2, root_cache_dir_orig_dir_file_we, function(err) {
					cb(err, cache_dir_orig_dir_file_we);
				});
			} else {
				cb(error);
			}
		});
	};
	var _get_tpl = function() {
		mkdirp(root_cache_dir_orig_dir, function(err) {
			console.log('create cache', root_cache_dir_orig_dir_file_we);
			if (!err) {
				if (ext == '.html') { // преобразуем html // подготавливает и кэширует html
					write_html(root_orig_dir_file, root_cache_dir_orig_dir_file_we, function(err) {
						cb(err, cache_dir_orig_dir_file_we);
					});
				} else { get_doc(); } // преобразуем doc
			} else { cb(err); }
		});
	};
	if (!orig_dir_file || !root || !cb) { cb(1); } else {
		var orig_dir = path.dirname(orig_dir_file);
		var orig_file = path.basename(orig_dir_file); // здесь без расширения
		var root_orig_dir = path.join(root, orig_dir);
		var root_orig_dir_file = path.join(root, orig_dir_file); // здесь без расширения
		//
		var ext;
		var cache_dir_orig_dir;
		var cache_dir_orig_dir_file;
		var root_cache_dir_orig_dir;
		var root_cache_dir_orig_dir_file;
		// с tpl расширением
		var cache_dir_orig_dir_file_we;
		var root_cache_dir_orig_dir_file_we;
		//
		if (root_orig_dir_file.indexOf(root) === 0) { // чтобы выше не подняться
			glob(orig_file+'.{tpl,html,docx,doc,odt}', { // списки доступных расширений
				cwd: root_orig_dir,
				root: root_orig_dir,
				nocase:true
			}, function(err, files) {
				if (!err) {
					if (files.length) {
						// с расширением
						ext = path.extname(files[0]);
						orig_dir_file = orig_dir_file + ext;
						root_orig_dir_file = root_orig_dir_file + ext;
						ext = ext.toLowerCase();
						if (ext != '.tpl') {
							// пути до кэша
							cache_dir_orig_dir = path.join(cache_dir, orig_dir_file.replace(/\//g, '|'));
							cache_dir_orig_dir_file_we = path.join(cache_dir_orig_dir, orig_file+'.tpl'); // tpl
							root_cache_dir_orig_dir_file_we = path.join(root, cache_dir_orig_dir_file_we); // tpl
							cache_dir_orig_dir_file = path.join(cache_dir_orig_dir, files[0]);
							root_cache_dir_orig_dir = path.join(root, cache_dir_orig_dir);
							root_cache_dir_orig_dir_file =  path.join(root, cache_dir_orig_dir_file);
							//
							orig_file = files[0];
							path.exists(root_cache_dir_orig_dir, function(exists) {
								if (exists) {
									path.exists(root_cache_dir_orig_dir_file_we, function(exists) {
										if (exists) {
											fs.stat(root_cache_dir_orig_dir_file_we, function(err, cache_stats) {
												if (!err) {
													fs.stat(root_orig_dir_file, function(err, orig_stats) {
														if (!err) {
															if (orig_stats.mtime.getTime() > cache_stats.mtime.getTime()) {
																console.log('rm -rf ' + root_cache_dir_orig_dir);
																rimraf(root_cache_dir_orig_dir, function(err) {
																	if (!err) {
																		_get_tpl();
																	} else { cb(err); }
																});
															} else {
																cb(0, cache_dir_orig_dir_file_we);
															}
														} else { cb(err); }
													});
												} else { cb(err); }
											});
										} else { _get_tpl(); }
									});
								} else { _get_tpl(); }
							});
						} else { cb(0, orig_dir_file); } // возвращаем без измнений
					} else { cb(3); }
				} else { cb(err); }
			});
		} else { cb(2); }
	}
};
