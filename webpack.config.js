const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: [ 'webpack-hot-middleware/client' , './app/scripts/libs/index.js'], //Can also use "main" property
    output: {
        path: path.resolve(__dirname, 'tmp'), //resolves the absolute path 
        filename: '[name].bundle.js', //
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    resolve:{
        alias: {
            components: path.resolve(__dirname, 'app/scripts/components'),
            fonts: path.resolve(__dirname,  'app/scripts/fonts'),
            images: path.resolve(__dirname,  'app/images'),
            sass: path.resolve(__dirname,  'app/styles/sass'),
            css: path.resolve(__dirname,  'app/styles/css')
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'] //to use the CSS imported - in your index.js file you 
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|png|svg|gif)$/,
                use:['file-loader']
            },            
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'react']
                }
                    
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'African Banker Awards 2018',
            template: './app/scripts/libs/template.ejs',
            inject: 'body'
        }), 
        new CleanWebpackPlugin(['tmp']),
        new webpack.HotModuleReplacementPlugin()
        //new UglifyJsPlugin()
    ]
  };