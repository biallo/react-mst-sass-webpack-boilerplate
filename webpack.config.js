const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const devMode = process.env.NODE_ENV !== 'production';
const publicPath = process.env.PUBLIC_PATH || '/';

module.exports = {
  mode: devMode ? 'development' : 'production',
  entry: path.resolve(__dirname, './src/index.jsx'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[contenthash].js',
    publicPath
  },
  cache:{
    type:'filesystem'
  },
  devtool: devMode ? 'eval-cheap-module-source-map' : false,
  devServer: {
    open: true,
    port: 2333,
    historyApiFallback: {
      index: '/',
      disableDotRule: true
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              api: 'modern'
            }
          }
        ]
      },
      {
        test: /\.(html)$/,
        loader: 'html-loader',
        options: {
          minimize: true,
        }
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg)$/i,
        type: 'asset/inline'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new Dotenv({
      path:
        process.env.NODE_ENV === 'development'
        ? './.env.local'
        : './.env'
        ,
      systemvars: true // 允许 process.env 下的任意系统变量
    }),
    new webpack.DefinePlugin({
      __PUBLIC_PATH__: JSON.stringify(publicPath)
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      title: 'Newton'
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[fullhash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[fullhash].css'
    }),
    // new BundleAnalyzerPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  performance: {
    maxAssetSize: 400 * 1024,
    maxEntrypointSize: 400 * 1024
  }
};
