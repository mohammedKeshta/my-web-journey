const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
  entry: path.join(__dirname, '/src/client/index.js'),
  mode: 'development',
  devtool: 'source-map',
  stats: 'errors-only',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modeuls|bower_components)/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.scss/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      src: './src/client/views/index.html',
      filename: './index.html',
    }),
    new CleanWebpackPlugin({
      // Simulate the removal of files
      dry: true,
      // Write Logs to Console
      verbose: true,
      // Automatically remove all unused webpack assets on rebuild
      cleanStaleWebpackAssets: true,
      protectWebpackAssets: false,
    }),
    new BundleAnalyzerPlugin(),
  ],
}
