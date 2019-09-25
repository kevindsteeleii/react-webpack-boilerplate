const merge = require('webpack-merge');
const Webpack = require('webpack');
const common = require('./webpack.common');
const path = require('path');

module.exports = merge( common, {
  output: {
    publicPath: '/',
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },  
  devtool: 'inline-source-map',
  plugins: [ 
    new Webpack.HotModuleReplacementPlugin()
  ]
});