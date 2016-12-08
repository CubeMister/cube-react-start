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
    publicPath: settings.WEBPACK_DEV_HOST,
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: here('./app/'),
      loader: 'react-hot-loader!babel-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader?sourceMap'
    }, {
      test: /\.json$/,
      exclude: /node_modules/,
      loader: 'json-loader'
    }, {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&mimetype=application/font-woff"
    }, {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&mimetype=application/font-woff"
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&mimetype=application/octet-stream"
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: "file"
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&mimetype=image/svg+xml"
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: here('./app/index.html'),
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
    extensions: ['', '.js', '.jsx', '.css']
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

/*
 {
 test: /\.(jpe?g|png|gif|svg|eot|svg|ttf|woff2?|otf)$/i,
 loader: 'url-loader?limit=40000'
 }
*/
