const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'hello-world': './src/hello-world.js',
        'mountain': './src/mountain.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },
    mode: 'development',
    devServer: {
        port: 9000,
        static: {
            directory: path.resolve(__dirname, './dist'),
        },
        devMiddleware: {
            index: 'index.html',
            writeToDisk: true
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
                'style-loader', 'css-loader'
            ]
         },
         {
            test: /\.scss$/,
            use: [
                'style-loader', 'css-loader', 'sass-loader'
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
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'hello-world.html',
            chunks: ['hello-world'],
            title: 'Hello World!',
            template: 'src/page-template.hbs',
            description: 'This is a blog template'
        }),
        new HtmlWebpackPlugin({
            filename: 'mountain.html',
            chunks: ['mountain'],
            title: 'Mountain',
            template: 'src/page-template.hbs',
            description: 'This is a blog template'
        }),
      ]
};