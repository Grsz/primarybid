const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { commonWebpack, shared } = require('./webpack.common.js');

const webpackBuildMode = 'production';
module.exports = merge(commonWebpack, {
  mode: webpackBuildMode,
  optimization: {
    sideEffects: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      ...shared.htmlWebpackPlugin,
      mode: webpackBuildMode,
      config: shared.config,
    }),
  ],
});
