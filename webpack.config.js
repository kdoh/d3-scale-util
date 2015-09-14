var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    './src/scale'
  ],
  output:  {
    path: __dirname,
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
      },
    ]
  }
}
