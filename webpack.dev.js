const merge = require('webpack-merge');
const Webpack = require('webpack');
const common = require('./webpack.common');
const path = require('path');

module.exports = merge( common, {
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, './src/public')
  },  
  plugins: [ new Webpack.HotModuleReplacementPlugin() ]
});