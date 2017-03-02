const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.common');

var PORT = process.env.PORT || 3000;
var HOST = process.env.HOST || 'localhost';
var ENV = process.env.NODE_ENV = process.env.ENV = 'dev';

module.exports = webpackMerge(
  commonConfig, {
    plugins: [
      new webpack.DefinePlugin({
        // Environment helpers
        ENV: JSON.stringify(ENV)
      })
    ],
    devServer: {
      port: PORT,
      host: HOST,
      inline: true,
      historyApiFallback: true,
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
      }
    }
  }
);
