const proxy = require('http-proxy-middleware');

module.exports = function(app) {

    app.use(proxy('/api', { target: 'http://10.103.212.67:8080/' }));
    app.use(proxy('/account', { target: 'http://10.111.70.62:8081/' }));
