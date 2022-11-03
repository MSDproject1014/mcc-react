const proxy = require('http-proxy-middleware');

module.exports = function(app) {
	
    app.use(proxy('/api', { target: 'http://10.100.145.17:8080/' }));
    app.use(proxy('/account', { target: 'http://10.97.91.242:8081/' }));
};