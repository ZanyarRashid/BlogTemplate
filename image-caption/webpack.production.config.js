const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    entry: './src/image-caption.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'http://localhost:9003/'
    },
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 3000
        }
    },
    module: {
        rules: [
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
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'image-caption.html',
            title: 'Image Caption',
            template: 'src/page-template.hbs',
            description: 'Image caption',
            minify: false
        }),
        new ModuleFederationPlugin({
            name: 'ImageCaptionApp',
            filename: 'remoteEntry.js',
            exposes: {
                './ImageCaption': './src/components/image-caption/image-caption.js',                
            }
        })
      ]
};