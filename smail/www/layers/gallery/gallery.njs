var path = require('path');

/* Загрузка главного конфига */
var getConfig = function(config_file, cb) {
	fs.readFile(config_file, function (err, data) {
		if (err) {
			console.log(err);
			cb();
		} else {
			try {
				data = JSON.parse(data)
				cb(data);
			} catch(e) { cb(); }
		}
	});
};

this.init = function(req, res, next, root) {
	var send = require(path.join(root, '.index.js')).send;
	var dir = require(path.join(root, 'plugins/files/dir.njs')).dir;
	var ans = {
		answer: ''
	};
	var GET = req.query;
	if (GET) {
		var astart = GET.as;
		var aend = GET.ae;
		var pstart = GET.ps;
		var pend = GET.pe;
		var album = GET.a;
		var photo = GET.p;
	}
	dir({ f:0, d:1, src:'/data/Галерея/', sort:'name', realname:2, onlyname:0 }, root, function(albums) {
		// ограничить количество альбомов
		if (astart) { albums = albums.slice(astart, aend); }
		var counter = albums.length;
		if (counter) {
			if (album) {
				for (var i = 0; i < counter; i++) {
					if (albums[i].name == album) {
						ans.album = albums[i];
						break
					}
				};
			}
			if (!ans.album) {
			  	ans.albums = [];
				albums.forEach(function(e, i, a) {
					dir({ f:1, d:0, src:'/data/Галерея/'+e.realname, sort:'name', realname:2, onlyname:0, e:'png,jpg,jpeg,gif' }, root, function(photos) {
						if (pstart) { photos = photos.slice(pstart, pend); }
						e.photos = photos;
						var counter2 = photos.length;
						if (!counter2) {
							if (-- counter === 0) { send(ans, req, res); }
						} else {
							ans.albums.push(e);
							photos.forEach(function(el, it, ar) {
								el.dir = e.name;
								el.realdir = e.realname;
								if (-- counter2 === 0) {
									if (-- counter === 0) { send(ans, req, res); }
								}
							});
						}
					});
				});
		  	} else {
				// GET.a
				dir({ f:1, d:0, src:'/data/Галерея/'+ans.album.realname, sort:'name', realname:2, onlyname:0 }, root, function(photos) {
					var counter2 = photos.length;
					if (counter2) {
						ans.photos = photos;
						var counter3 = 2;
						// обработать фотографии
						photos.forEach(function(e, i, a) {
							e.dir = ans.album.name;
							e.num = i;
							e.realdir = ans.album.realname;
							if (e.name == photo) { ans.photo = e; }
							if (-- counter2 === 0) {
								// прочитать к какому шоу относится данный альбом
								for (var i = 0; i < Things.length; i++) {
									Things[i]
								};
								var config_file = path.join(root, '/data/config.json');
									if (!ans.photo) { ans.photo = photos[0]; }
									ans.photo.sel = true;
									if (-- counter3 === 0) { send(ans, req, res); }
							}
						});
						// прочитать текст для альбома
						fs.readFile('/data/Галерея/'+ans.album.name+'.html', function (err, data) {
							if (err) {
							  	console.log(err);
						  	} else {
								ans.html = data;
							}
							if (-- counter3 === 0) { send(ans, req, res); }
						});
					} else { send(ans, req, res); }
				});
			}
		} else { send(ans, req, res); }
	});
};
