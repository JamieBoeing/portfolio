const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env) => {
  const isProduction = process.env.NODE_ENV === 'production';

  return {
    entry: {
      App: './src/index.js',
    },
    output: {
      path: path.resolve(__dirname, 'public/js/dist'),
      filename: '[name].[contenthash].js',
      sourceMapFilename: isProduction
        ? '[name].js.map'
        : '[name].[contenthash].js.map',
      publicPath: '/js/dist',
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.m?js$/,
          enforce: 'pre',
          use: ['source-map-loader'],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.scss$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
            'sass-loader',
            'postcss-loader',
          ],
        },
      ],
    },
    resolve: {
      modules: ['node_modules'],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'style.[contenthash].css',
      }),
      new HtmlWebpackPlugin({
        inject: true,
        hash: true,
        template: './src/index.html',
        children: false,
        filename: '../../index.html',
      }),
      new CleanWebpackPlugin(),
      new webpack.ProvidePlugin({
        React: 'react',
      }),
    ],
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 0,
      },
      usedExports: true,
      sideEffects: true,
    },
  };
};
