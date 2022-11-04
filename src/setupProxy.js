const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/api', { target: 'http://10.104.159.142:8080/' }));
    app.use(proxy('/api', { target: 'http://10.98.122.59:8080/' }));
    app.use(proxy('/account', { target: 'http://10.98.228.43:8081/' }));
