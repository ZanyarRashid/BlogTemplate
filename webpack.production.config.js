const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'hello-world': './src/hello-world.js',
        'mountain': './src/mountain.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/static/'
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
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'hello-world.html',
            chunks: ['hello-world'],
            title: 'Hello World!',
            template: 'src/page-template.hbs',
            description: 'Hello world!',
            minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'mountain.html',
            chunks: ['mountain'],
            title: 'Mountain image',
            template: 'src/page-template.hbs',
            description: 'This is a mountain',
            minify: false
        }),
      ]
};