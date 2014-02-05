(function() {
	var functions = function() {
		var infra = this;
		infra.functions = {
			onshowDefault: function(cb) {
				var layer = this;
				if (!layer.config.last) {
					layer.config.last = {};
				}
				layer.config.last.state = infra.state;
				cb();
			},
			oncheckBreadcrumb: function(cb) {
				var layer = this;
				if (!layer.config.last || (layer.config.last.state != infra.state)) {
					infra.reparseLayer(layer);
					layer.config.breadcrumb = [];
					if (infra.state != '/') {
						var breadcrumb = infra.state.replace(/\/+$/, '').replace(/^\/+/, '').split('/');
						var i, l;
						for (i=0, l=breadcrumb.length; i<l; i++) {
							layer.config.breadcrumb.push({
								name: breadcrumb[i],
								href: '/' + breadcrumb.slice(0, i+1).join('/') + '/',
								last: i+1==l ? true : false
							});
						}
					} else { layer.htmlString = ' '; }
				}
				cb();
			},
			onloadSpecial: function(cb) {
				// сократить до четырех и определить альтернативные имена
				var layer = this;
				var i, ii;
				for (i = 0; i < layer.data.shows.length; i++) {
					layer.config.shows.push(layer.data.shows[i]);
					if (i == 3) { break; }
				}
				for (i = 0; i < layer.config.shows.length; i++) {
					var show = layer.config.shows[i];
					for (ii = 0; ii < show.subgroups.length; ii++) {
						var group = show.subgroups[ii];
						if (group[0]['Текст ссылки']) {
							show.alt = group[0]['Текст ссылки'];
						}
					}
				}
				cb();
			},
			onloadGalleries: function(cb) { // первые 3
				var layer = this;
				layer.config.all_albums = [];
				var counter = layer.data.all_albums.length;
				if (layer.config.num < counter) {
					counter = layer.config.num;
				}
				var i; for (i = 0; i < counter; i++) {
					layer.config.all_albums.push(layer.data.all_albums[i]);
					// + назначить showdir
					var x; for (x = 0; x < layer.data.all_albums[i].photos.length; x++) {
						layer.data.all_albums[i].photos[x].showdir = layer.data.all_albums[i].dir;
					}
				}
				cb();
			},
			onloadGallery: function(cb) {
				var layer = this;
				layer.config.all_albums = [];
				var i; for (i = 0; i < layer.data.all_albums.length; i++) {
					var album = layer.data.all_albums[i];
					album.three_photos = [];
					var x; for (x = 0; x < album.photos.length; x++) {
						var photo = album.photos[x];
						album.three_photos.push(photo);
						// + назначить showdir
						photo.showdir = album.dir;
						if (x == 2) { break; }
					}
				}
				cb();
			},
			// сменить картинку
			photochange: function(layer) {
				//console.log(layer.config.albumname);
				//console.log(layer.config.photoname);
			},
			oncheckGallery2: function(cb) {
				var layer = this;
				var states = infra.state.split('/');
				layer.config.albumname = states[2];
				layer.config.photoname = '';
				if (states.length == 5) { // album photo
					layer.config.photoname = states[3];
				}
				// если альбом не изменился, изменить только фотографию
				if (layer.config.last.albumname && layer.config.last.photoname && (layer.config.albumname == layer.config.last.albumname) && layer.config.photoname != layer.config.last.photoname) {
					//photochange(layer);
					infra.reparseLayer(layer);
				} else if (!layer.config.last.albumname || (layer.config.albumname != layer.config.last.albumname)) { // если изменился альбом, обновить
					//console.log('oncheck2');
					layer.config.title = layer.config.albumname;
					infra.reparseLayer(layer);
				}
				cb();
			},
			onloadGallery2: function(cb) {
				var layer = this;
				//console.log('onload');
				// найти нужный альбом
				var i; for (i = 0; i < layer.data.all_albums.length; i++) {
					var album = layer.data.all_albums[i];
					if (album.name == layer.config.albumname) {
						layer.config.photos = album.photos;
						layer.config.showname = album.showname;
						layer.config.groupname = album.groupname;
						// найти фото
						var x; for (x = 0; x < layer.config.photos.length; x++) {
							var photo = layer.config.photos[x];
							photo.num = x;
							if (photo.name == layer.config.photoname) {
								layer.config.photo = photo;
							}
							// + назначить showdir
							photo.showdir = album.dir;
						}
						if (!layer.config.photo) {
							layer.config.photo = layer.config.photos[0];
						}
						layer.config.photo.sel = true;
						break;
					}
				}
				if (layer.config.showname && layer.config.groupname && layer.config.albumname) {
					var h = '/data/Шоу/'+
						layer.config.showname+'/'+layer.config.groupname+'/'+layer.config.albumname+'.html';
					// загрузить описание альбома
					infra.load(h, function(err, album_html) {
						layer.config.album_html = album_html;
						cb();
					});
				} else { cb(); }
			},
			onshowGallery2: function(cb) {
				var layer = this;
				if (layer.config.photo) { // первый запуск
					layer.config.photo.sel = false;
					layer.config.last.albumname = layer.config.albumname;
					layer.config.last.photoname = layer.config.photoname;
					if (typeof(window) != 'undefined') {
						//console.log('onshow');
						// галерея
						var btnPrev = $('.album .photos .album_top');
						var btnNext = $('.album .photos .album_bottom');
						$('.album .photos .gphotos').jCarouselLite({
							start: layer.config.photo.num-1,
							vertical: true,
							mouseWheel: true,
							btnPrev: btnPrev,
							btnNext: btnNext
						});
						// клики
						var photos = $(".gphotos ul li a");
						photos.unbind('click');
						photos.off('click.smile')
								.on('click.smile', function (e) {
							var min_img = $(this).find('img');
							$('.album .photos .gphotos img').removeClass('select');
							min_img.addClass('select');
							layer.config.photoname = min_img.attr('alt');
							var img = $('.big_photo a img');
							var src = min_img.attr('src').replace(/\?.+$/,'');
							var a = $('.big_photo a');
							//
							infra.state = infra.state.split('/'); infra.state[3] = layer.config.photoname;
							infra.state = infra.state.join('/');
							// индикатор загрузки фото
							infra.noscroll = true;
							infra.check();
							//img.unbind('load');
							//img.load(function() {
							//	console.log('load');
							//	infra.check();
							//});
							img.attr('src', src+'?w=458');
							img.attr('alt', layer.config.photoname);
							a.attr('href', src+'?w=1024&h=768');
							a.attr('title', layer.config.photoname);
							//
							e.preventDefault ? e.preventDefault() : (e.returnValue=false);
							return;
						});
					}
				}
				cb();
			},
			oncheckShow: function(cb) {
				var layer = this;
				infra.reparseLayer(layer);
				var show_name = infra.state.replace(/\/+$/, '').replace(/^\/+/, '').split('/')[1];
				var part_show_name = infra.state.replace(/\/+$/, '').replace(/^\/+/, '').split('/')[2];
				layer.config.show = false;
				infra.load.json('/layers/pages/show.njs?s=1&json=1', function(err, data) {
					if (err) {
						cb();
					} else {
						var i; for (i = 0; i < data.shows.length; i++) {
							if (data.shows[i].name == show_name) {
								layer.config.show = data.shows[i];
								break;
							}
						}
						if (layer.config.show) {
							layer.config.title = show_name;
							var counter = layer.config.show.subgroups[0].length;
							if (counter) {
								//if (counter > 2) {
									layer.config.shows_list = false;
								//}
								// меняем порядок в зависимости от адресной строки
								var subgroups = layer.config.show.subgroups[0];
								var elem;
								var x; for (x = 0; x < counter; x++) {
									if (subgroups[x]['Название'] == part_show_name) { // поставить первым
										elem = subgroups.splice(x,1);
										break;
									}
								}
								if (elem) {
									subgroups.splice(0,0,elem[0]);
								}
								layer.config.subgroups = subgroups;
								subgroups.forEach(function(val, index) {
									val.two = false;
									var part_show_name = val['Название'];
									if (val['Альбомы']) {
										val.gallery_count = val['Альбомы'].length;
									}
									if ((index!==0) &&  (index%2 !== 0)) {
										val.two = true;
									}
									if (part_show_name) {
										var show_html = '/data/Шоу/'+show_name+'/'+part_show_name+'.html';
										infra.load(show_html, function(err, html) {
											if (!err) { val.html = html; }
											if (--counter === 0) { cb(); }
										});
									} else {
										if (--counter === 0) { cb(); }
									}
								});
							} else {
								cb();
							}
						} else {
							infra.status_code = 404;
							layer.config.title = ''; 
							layer.htmlString = '<div id="information"><br>Страница не найдена</div>';
							cb();
						}
					}
				});
			},
			reparseStatLayer: function(cb) {
				var layer = this;
				if (layer.config.last && (layer.config.last.state != infra.state)) {
					infra.reparseLayer(layer); // обновляем слой со статистикой
				}
				cb();
			}
		};
		infra.set.head({
			title: {
				'404': 'Компания «Смайл» / Страница не найдена (404)',
				'main': 'Компания «Смайл» — организация праздников',
				'sub': ' / Компания «Смайл»'
			},
			meta: { 'description': '', 'keywords': 'шоу, аниматоры' }
		});
	};
	if (typeof Infra !== "undefined") {
		Infra.ext(functions);
	}
	if (typeof module !== "undefined" && module.exports) {
		module.exports = functions;
	}
})();
