/* eslint-disable no-console */

const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const getCompilerConfig = async () => {
  const outputDir = path.join(__dirname, 'lib');

  return {
    mode: 'production',
    target: 'node',
    externals: [nodeExternals()],
    entry: '/index.ts',
    output: {
      filename: 'index.js',
      path: outputDir,
    },
    node: {
      __dirname: true,
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: '/lib',
          use: [
            {
              loader: 'ts-loader',
            },
          ],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ['**/*', '!env.yaml'],
      }),
      new CopyPlugin({
        patterns: [
          { from: path.join(__dirname, 'package.json'), to: outputDir },
          {
            from: path.join(__dirname, '**/*.graphql'),
            to: outputDir,
          },
        ],
      }),
    ],
    resolve: {
      extensions: ['.ts', '.js'],
    },
    watchOptions: {
      ignored: /node_modules/,
    },
  };
};

module.exports = getCompilerConfig;
