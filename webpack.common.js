const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    polyfill: 'babel-polyfill',
    main: './src/app.js',
    vendor: './src/vendor.js'
  },
  module: {
    rules: [
      {
        test:/\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test:/\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.s(c|a)ss/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
