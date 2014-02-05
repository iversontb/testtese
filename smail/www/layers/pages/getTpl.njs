
var path = require('path');

this.init = function(req, res, next, root) {
	var GET = req.query;
	var get_tpl = require(path.join(root, 'plugins/getTpl/getTpl.njs')).get_tpl;
	if (GET && GET.tpl) {
		var cache_dir = '/cache/templates/';
		get_tpl(GET.tpl.trim().replace(/^\//,''), cache_dir, root, function(err, cache_file) {
			if (cache_file && !err) {
				req.url = cache_file;
				next();
			} else {
				console.log(err);
				res.writeHead(502); res.end('Bad Gateway');
			}
		});
	} else { res.writeHead(502); res.end('Bad Gateway'); }
};
