var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');

const ENV = process.env.NODE_ENV = process.env.ENV = 'development';

module.exports = webpackMerge(commonConfig, {

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV),
                'API_ENDPOINT': JSON.stringify('http://localhost:8080')
            }
        })
    ]
});