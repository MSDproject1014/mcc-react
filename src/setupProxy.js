const proxy = require('http-proxy-middleware');

module.exports = function(app) {
	
    app.use(proxy('/api', { target: 'http://10.101.15.104:8080/' }));
    app.use(proxy('/account', { target: 'http://10.99.244.48:8081/' }));
};

test3