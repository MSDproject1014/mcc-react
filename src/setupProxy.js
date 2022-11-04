const proxy = require('http-proxy-middleware');

module.exports = function(app) {
	
    app.use(proxy('/api', { target: 'http://10.111.48.42:8080/' }));
    app.use(proxy('/account', { target: 'http://10.105.86.225:8081/' }));
};