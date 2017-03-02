var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var helpers = require('./helpers');

module.exports = {
  entry: {
    polyfill: './src/polyfill.js',
    vendor: './src/vendor.js',
    app: './src/app/main.js'
  },
  output: {
    publicPath: '/',
    path: './dist',
    filename: '[name].[chunkhash].js',
    chunkFilename: '[id].[chunkhash].js',
    sourceMapFilename: '[file].map'
  },
  module: {
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'ngx-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /.(scss|sass)$/,
        loader: [
          'raw-loader',
          'sass-loader'
        ],
        exclude: helpers.root('src', 'styles')
      },
      {
        test: /.(scss|sass)$/,
        loader: ['style-loader', 'css-loader', 'sass-loader'],
        include: helpers.root('src', 'styles')
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfill']
    }),

    // Fix Webpack Warning https://github.com/angular/angular/issues/11580
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      __dirname
    ),

  ]
}
