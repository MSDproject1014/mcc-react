const proxy = require('http-proxy-middleware');

module.exports = function(app) {

//    app.use(proxy('/api', { target: 'http://localhost:8080/' }));
//    app.use(proxy('/account', { target: 'http://localhost:8081/' })); 
	
	app.use(proxy('/api', { target: 'http://10.105.42.54 :8080/' }));
	app.use(proxy('/account', { target: 'http://10.110.108.156:8081/' }));
};
