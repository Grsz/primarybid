const path = require('path');

const dotenv = require('dotenv');
const getenv = require('getenv');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

dotenv.config();

const { version } = require('./package.json');

const outputPath = path.resolve(__dirname, 'dist');
const buildEnvironment = getenv('BUILD_ENVIRONMENT', 'local');
const isLocal = buildEnvironment === 'local';

const config = {
  apiUrl: getenv('API_URL'),
  version,
  buildEnvironment,
};

const shared = {
  devtool: 'eval',
  outputPath,
  config,
  htmlWebpackPlugin: {
    template: './src/assets/index.ejs',
    title: 'PrimaryBid',
    version,
  },
};

const commonWebpack = {
  entry: [
    'core-js/modules/es.promise',
    'core-js/modules/es.array.iterator',
    './src/index.tsx',
  ],
  output: {
    // `filename` provides a template for naming your bundles (remember to use `[name]`)
    filename: '[contenthash].bundle.js',
    // `chunkFilename` provides a template for naming code-split bundles (optional)
    chunkFilename: '[contenthash].bundle.js',
    // `path` is the folder where Webpack will place your bundles
    path: outputPath,
    publicPath: '/',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[contenthash].css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './public/',
          to: './',
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          //Creates `style` nodes from JS strings
          // 'style-loader',
          //Translates CSS into CommonJS
          'css-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          //Creates `style` nodes from JS strings
          // 'style-loader',
          //Translates CSS into CommonJS
          {
            loader: 'css-loader',
            options: {
              importLoaders: isLocal ? 0 : 1,
            },
          },
          ...(isLocal ? [] : ['postcss-loader']),
          //Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]',
        },
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        // use: [
        //   {
        //     loader: 'file-loader',
        //   },
        // ]
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]',
        },
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                //Fast refresh enabled in local
                isLocal && 'react-refresh/babel',
              ].filter(Boolean),
            },
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: '/node_modules/',
      },
      {
        test: /\.mjs$/, //For importing Amplify UI components
        include: /node_modules/,
        type: 'javascript/auto',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.mjs', '.d.ts', '.scss'],
  },
};

module.exports = {
  commonWebpack,
  shared,
};
