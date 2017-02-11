const path = require('path');
// const webpack = require('webpack');

module.exports = {
  entry: [
    './client/index.js',
  ],
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.jsx*$/,
      exclude: /node_modules/,
      loaders: ['babel-loader?{"presets":["es2015","react"]}'],
    }],
  },
};
