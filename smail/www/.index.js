/* Файл отвечает за инициализацию приложения, роутинг, подробная логика подключается отдельно */

/* Стандартные библиотеки */
var fs = require('fs');
var path = require('path');
var connect = require('connect');

/* Сторонние библиотеки */
//var RedisStore = require('connect-redis')(connect);
//var sessionStore = new RedisStore();
var MemoryStore = connect.session.MemoryStore;
var sessionStore = new MemoryStore();

var quip = require('quip');
var Infra = require(path.join(__dirname, '/lib/infrajs/dist/infra.js')); // основной infrajs
var infrajs = require('infrajs'); // middleware для работы с infrajs на сервере
var Mustache = require('mustache');
var regredirect = require('connect-redirect');
var imager = require('connect-imager');
var njs = require('njs');
var regstatic = require('connect-regstatic');

/* Настройка функций и переменных */
var static_files = /((infra|core|images|data|layers|lib|layout|design)\/.*)*(\.(htc|pdf|psd|tpl|html|js|json|ico|gif|jpg|jpeg|png|css|rar|zip|swf|avi|mpg|flv|mpeg|wmv|ogv|oga|ogg|eot|woff|ttf|svg|odt|doc|docx|xls|xlsx|xml|mht))$/i;
Infra.ext(function() {
	this.parsetpl = function(html, ctx, callback) {
		var res = Mustache.to_html(html, ctx);
		if (callback) { callback(res); } else { return res; }
	};
});
Infra.ext(require(path.join(__dirname, '/layers/functions.js')));
var _layers = fs.readFileSync(__dirname + '/layers/layers.json', 'utf-8');
JSON.parse(_layers); // check work
Infra.ext(function() { this.index = JSON.parse(_layers); });

/* Конфигурация модулей веб-приложения */
exports.app = connect()
	.use(connect.query())
	.use(connect.bodyParser({ maxFieldsSize: 20 * 1024 * 1024 }))
	.use(connect.cookieParser())
	.use(connect.session({ secret: 'secret smile kD5bTcSk', store: sessionStore }))
	//.use(connect.session.ignore.push('/robots.txt'))
	.use(quip())
	.use(regredirect({reg: new RegExp('//', 'ig'), str: '/'}))
	.use(regredirect({reg: new RegExp('\\+', 'ig'), str: ' '}))
	.use(regredirect({reg: /^\/\?/, str: '/'}))
	.use(imager({cache_dir: '/cache/imager_resize/', root: __dirname}))
	.use(njs({root: __dirname}))
	.use(regstatic({static_files: static_files, root: __dirname}))
	.use(infrajs({
		root_dir: __dirname,
		Infra: Infra,
		index_html: fs.readFileSync(__dirname + '/index.html', 'utf-8'),
		logger: 'DEBUG'
	}));

/* Запуск */
if (require.main === module) { // если веб-приложение запускается как отдельная программа
	var port = 8001;
	process.on('uncaughtException', function (err) { console.log('Caught exception: ' + err); });
	console.log('listen ' + port + ' ...');
	exports.app.listen(port);
}
