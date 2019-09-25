const merge = require('webpack-merge');
const common = require('./webpack.common');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = merge(common, {
  output: {
    filename: '[name][hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [ new CleanWebpackPlugin() ]
});