const proxy = require('http-proxy-middleware');

module.exports = function(app) {

//    app.use(proxy('/api', { target: 'http://localhost:8080/' }));
//    app.use(proxy('/account', { target: 'http://localhost:8081/' })); 
	
	app.use(proxy('/api', { target: 'http://10.106.234.111:8080/' }));
	app.use(proxy('/account', { target: 'http://10.103.30.185:8081/' }));
};
