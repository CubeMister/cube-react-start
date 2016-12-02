import colors from 'colors';
import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';
import devConfig from './webpack.dev.config';
import {WEBPACK_DEV_PORT, WEBPACK_DEV_HOST} from './settings';

const compile = webpack(devConfig);
const app = new webpackDevServer(compile, devConfig.devServer);

app.listen(WEBPACK_DEV_PORT, ()=> {
	console.log(colors.yellow(`webpack-dev-server: ${WEBPACK_DEV_HOST}`));
});