const proxy = require('http-proxy-middleware');

module.exports = function(app) {

//    app.use(proxy('/api', { target: 'http://localhost:8080/' }));
//    app.use(proxy('/account', { target: 'http://localhost:8081/' })); 
	
	app.use(proxy('/api', { target: 'http://10.102.14.160:8080/' }));
	app.use(proxy('/account', { target: 'http://10.111.88.16:8081/' }));

/*     app.use(proxy('/api', { target: 'http://172.17.0.3:8080/' }));
    app.use(proxy('/account', { target: 'http://172.17.0.6:8081/' })); */

};
