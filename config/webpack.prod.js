const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.common');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(
  commonConfig, {
    plugins: [
      // https://github.com/angular/angular/issues/10618
      new webpack.optimize.UglifyJsPlugin({
        mangle: {
          keep_fnames: true
        },
        output: {
          comments: false
        }
      }),

      new webpack.DefinePlugin({
        // Environment helpers
        ENV: JSON.stringify(ENV)
      })
    ]
  }
);
