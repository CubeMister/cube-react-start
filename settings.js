var APP_PORT = 7000;
var APP_HOST = 'http://localhost:' + APP_PORT + '/';
var WEBPACK_DEV_PORT = 7001;
var WEBPACK_DEV_HOST = 'http://localhost:' + WEBPACK_DEV_PORT + '/';
var ENV = !!process.env.NODE_ENV? process.env.NODE_ENV: 'development';

module.exports = {
	APP_PORT: APP_PORT,
	APP_HOST: APP_HOST,
	WEBPACK_DEV_PORT: WEBPACK_DEV_PORT,
	WEBPACK_DEV_HOST: WEBPACK_DEV_HOST,
	ENV: ENV
};