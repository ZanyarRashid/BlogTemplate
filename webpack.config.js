const path = require('path');
const { RuntimeGlobals } = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },
    mode: 'none',
    module: {
        rules: [
         {
           test: /\.(png|svg|jpg|jpeg|gif)$/i,
           type: 'asset/resource',
           parser: {
            dataUrlCondition: {
                maxSize: 3 * 1024 // 3 kilobites
            }
           }
         },
         {
            test: /\.txt/,
            type: 'asset/source'
         },
         {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader, 'css-loader'
            ]
         },
         {
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
            ]
         },
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [ '@babel/env' ]
                }
            }
         },
         {
            test: /\.hbs$/,
            use: [
                'handlebars-loader'
            ]
         }
        ],
      },
      plugins: [
        new TerserPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css',
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Hello World!',
            template: 'src/index.hbs',
            filename: 'index.html',
            description: 'This is a blog template'
        }),
      ]
};