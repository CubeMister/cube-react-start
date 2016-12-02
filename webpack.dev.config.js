var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var env = !!process.env.NODE_ENV? process.env.NODE_ENV: 'development';
var settings = require('./settings');

module.exports = {
	devtool: 'eval-source-map',
	entry: {
		app: [
			'webpack-dev-server/client?' + settings.WEBPACK_DEV_HOST,
      		'webpack/hot/dev-server',
      		here('./app/js/app')
      	]
	},
	output: {
		path: here('./assets/'),
		publicPath: '/',
		filename: '[name].js'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			include: here('./app/'),
			loader: 'react-hot-loader!babel-loader'
		}, {
			test: /\.css$/,
			exclude: /node_modules/,
			loader: 'style-loader!css-loader!?sourceMap'
		}, {
			test: /\.json$/,
			exclude: /node_modules/,
			loader: 'json-loader'
		}, {
			test: /\.(jpe?g|png|gif|svg)$/i,
      		exclude: /node_modules/,
      		loader: 'url-loader?limit=40000',
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			title: 'React Start',
			inject: true
		}),
    	new webpack.HotModuleReplacementPlugin(),
    	new webpack.NoErrorsPlugin(),
    	new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(env)
		})
	],
	resolve: {
		extensions: ['.js', '.jsx']
	},
	devServer: {
		contentBase: here('./assets/'),
		hot: true,
		inline: true,
		watchOptions: {
	        aggregateTimeout: 5000,
	        poll: true
	    },
	    publicPath: settings.WEBPACK_DEV_HOST,
	    stats: 'errors-only'
	}
};

function here(d) {
	return !!d? path.resolve(__dirname, d): __dirname;
}