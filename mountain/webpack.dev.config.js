const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    entry: './src/mountain.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'http://localhost:9002/'
    },
    mode: 'development',
    devServer: {
        port: 9002,
        static: {
            directory: path.resolve(__dirname, './dist'),
        },
        devMiddleware: {
            index: 'mountain.html',
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
            filename: 'mountain.html',
            title: 'Mountain',
            template: 'src/page-template.hbs',
            description: 'This is a blog template'
        }),
        new ModuleFederationPlugin({
            name: 'MountainApp',
            filename: 'remoteEntry.js',
            exposes: {
                './MountainPage': './src/components/mountain-page/mountain-page.js'
            }
        })
      ]
};