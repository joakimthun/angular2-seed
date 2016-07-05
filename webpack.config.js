var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    entry: './src/main.ts',
    output: {
        path: './dist',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            // Ts
            { 
                test: /\.ts$/, 
                loader: 'ts-loader' 
            },
            // Html
            {
                test: /\.html$/,
                loader: 'html'
            },
            // Sass
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            },
            // Fonts and images
            { 
                test: /\.((woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|svg|jpe?g|png|gif|ico)$/,
                loader: 'url?limit=10000' 
            },
            { 
                test: /\.((ttf|eot|otf)(\?v=[0-9]\.[0-9]\.[0-9]))|(ttf|eot|otf)$/,
                loader: 'file' 
            }
        ]
    },
    resolve: {
        extensions: [ '', '.js', '.ts' ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ExtractTextPlugin('./app.bundle.css', {
            allChunks: true
        })
    ]
};