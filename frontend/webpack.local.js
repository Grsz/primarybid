/* eslint-disable no-console */
/* Webpack build for local development */
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const { commonWebpack, shared } = require('./webpack.common.js');

const buildEnvironment = process.env.BUILD_ENVIRONMENT || 'local';
const webpackBuildMode = 'development';

console.log(
  `Build Environment:${buildEnvironment}. Webpack Build Mode:${webpackBuildMode}`,
);

module.exports = merge(commonWebpack, {
  mode: webpackBuildMode,
  devtool: shared.devtool,
  devServer: {
    historyApiFallback: true,
    compress: true,
    hot: true,
    host: '0.0.0.0',
    port: 3001,
  },
  plugins: [
    new ReactRefreshWebpackPlugin({
      overlay: false,
    }),
    new HtmlWebpackPlugin({
      ...shared.htmlWebpackPlugin,
      mode: webpackBuildMode,
      config: shared.config,
    }),
  ],
});
