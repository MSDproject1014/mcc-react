const proxy = require('http-proxy-middleware');

module.exports = function(app) {
	
    app.use(proxy('/api', { target: 'http://10.99.168.100:8080/' }));
    app.use(proxy('/account', { target: 'http://10.97.128.9:8081/' }));
};