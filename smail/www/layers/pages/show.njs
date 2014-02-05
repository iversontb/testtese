var path = require('path');

var office = require('office');

// list - список строк одной страницы
var _xlsGetSubgroups = function(list) {
	// разделы
	/*
	 [
		 [
			 {name1:fs,name2:dsa},
			 {name1:dd,name2:aaa}
		 ],[
			 {name3:fs},
			 {name3:dd}
		 ]
	 ];
	 */
	var subgroups = [];
	var head = false; // текущий заголовок
	var subgruop = [];
	// перебираются строки
	var len2 = list.length;
	for (var index = 0; index < len2; index++) {
		var cell = list[index].cell;
		var B = false; // загловок
		var $t = false; // данные
		var len = cell.length;
		// перебирается отдельная строка
		for (var i = 0; i < len; i++) {
			var e = cell[i];
			if (e.B) {
				B = true;
			}
			if (e.$t) {
				$t = true;
			}
		}
		// если нет хеда и строка не хед, идем дальше
		// если строка хед, создаем группу ключей,
		if (B && !$t) {
			head = [];
			for (var ii = 0; ii < len; ii++) {
				var e = cell[ii];
				head.push(e.B);
			}
		// если есть хед добавлем значения в группу ключей
		} else if ((head && $t && !B) && (len >= head.length)) {
			var item = {};
			for (var ii = 0; ii < len; ii++) {
				if (head[ii]) {
					item[head[ii]] = cell[ii].$t;
				}
			}
			subgruop.push(item);
		} else {
			head = false;
		}
		if (subgruop.length && (!head || (len2 == index+1))) {
			subgroups.push(subgruop);
			subgruop = [];
		}
	};
	return subgroups;
};

var xlsGetAll = function(sheets, cb) {
	var gruops = [];
	var _pages = sheets.sheet;
	var counter = _pages.length;
	if (counter) {
		_pages.forEach(function(element, index, array) {
			var group = { name: element.pagetitle };
			var subgroups = _xlsGetSubgroups(element.rows.row);
			if (subgroups && subgroups.length) {
				group.subgroups = subgroups;
				gruops.push(group);
			}
			if (-- counter === 0) { cb(gruops); }
		});
	} else if (_pages) {
		var element = _pages;
		var group = { name: element.pagetitle };
		var subgroups = _xlsGetSubgroups(element.rows.row);
		if (subgroups && subgroups.length) {
			group.subgroups = subgroups;
			gruops.push(group);
		}
		cb(gruops);
	} else { cb(); }
};

/* Добавить албомы для шоу */
var setAlbums = function(showname, groupname, root, cb) {
	var albums_dir = '/data/Шоу/'+showname+'/'+groupname+'/';
	var dir = require(path.join(root, 'plugins/files/dir.njs')).dir;
	dir({ f:0, d:1, src:albums_dir, sort:'name', realname:2, onlyname:0 }, root, function(albums) {
		if (albums && albums.length) {
			var _albums = [];
			var counter = albums.length;
			// собрать фотографии для альбома
			albums.forEach(function(e, i, a) {
				dir({ f:1, d:0, src:albums_dir+e.realname, sort:'name', realname:2, onlyname:0, e:'png,jpg,jpeg,gif' }, root, function(photos) {
					var counter2 = photos.length;
					if (!counter2) {
						if (-- counter === 0) { cb(_albums); }
					} else {
						e.showname = showname;
						e.groupname = groupname;
						e.dir = albums_dir;
						_albums.push(e);
						e.photos = photos;
						photos.forEach(function(el, it, ar) {
							el.dir = e.name;
							el.realdir = e.realname;
							if (-- counter2 === 0) {
								if (-- counter === 0) { cb(_albums); }
							}
						});
					}
				});
			});
		} else {
			cb()
		}
	})
};

this.init = function(req, res, next, root) {
	var send = function() {
		res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' }); 
		res.end(JSON.stringify(ans, null, "\t"), 'utf-8');
	};
	var dir = require(path.join(root, 'plugins/files/dir.njs')).dir;
	var show_file = path.join(root, '/data/Шоу.xls');
	var comments_file = path.join(root, '/data/Отзывы.xls');
	var ans = { answer: '' };
	var GET = req.query;
	if (GET && GET.s) {
		var show_name = GET.s.trim();
		if (GET.s==2) {
			office.parse(comments_file, function(err, data) {
				if (!err && data && data.sheets && data.sheets.sheet) {
					xlsGetAll(data.sheets, function(comments) {
						if (comments && comments.length) {
							ans.comments = comments[0].subgroups[0];
							send();
						} else { send(); }
					});
				} else { send(); }
			});
		} else {
			office.parse(show_file, function(err, data) {
				if (!err && data && data.sheets && data.sheets.sheet) {
					xlsGetAll(data.sheets, function(shows) {
						if (shows && shows.length) {
							ans.shows = shows;
							ans.all_albums = [];
							var counter = shows.length;
							shows.forEach(function(e, i, a) {
								var showname = e.name;
								if (e.subgroups && e.subgroups[0] && e.subgroups[0].length) {
									var counter2 = e.subgroups[0].length;
									e.subgroups[0].forEach(function(ele, ind, arr) {
										var group = ele;
										var groupname = ele['Название'];
										setAlbums(showname, groupname, root, function(albums) {
											if (albums && albums.length) {
												for (var ii = 0; ii < albums.length; ii++) {
													ans.all_albums.push(albums[ii]);
												};
												group['Альбомы'] = albums;
											}
											if (-- counter2 === 0) {
												if (-- counter === 0) {
													ans.all_albums = ans.all_albums.reverse();
													send();
												}
											}
										});
									});
								} else {
									if (-- counter === 0) { send(); }
								}
							});
						} else { send(); }
					});
				} else { send(); }
			});
		}
	} else { send(); }
};
