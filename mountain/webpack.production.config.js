const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    entry: './src/mountain.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'http://localhost:9002/'
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
            filename: 'mountain.html',
            title: 'Mountain image',
            template: 'src/page-template.hbs',
            description: 'This is a mountain',
            minify: false
        }),
        new ModuleFederationPlugin({
            name: 'MountainApp',
            filename: 'remoteEntry.js',
            exposes: {
                './MountainPage': './src/components/mountain-page/mountain-page.js'
            },
            remotes: {
                ImageCaptionApp: 'ImageCaptionApp@http://localhost:9003/remoteEntry.js'
            }
        })
      ]
};