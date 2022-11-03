const proxy = require('http-proxy-middleware');

module.exports = function(app) {

	app.use(proxy('/api', { target: 'http://10.105.0.94:8080/' }));
	app.use(proxy('/account', { target: 'http://10.109.93.21:8081/' }));
};

test
