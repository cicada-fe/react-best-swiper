'use strict';

const env = process.env.NODE_ENV || 'development';

const webpack = require('webpack');
const path = require('path');

const webpackUMDExternal = require('webpack-umd-external');

const pluginsList = [];
const outputFileName = env === 'production' ?
    'react-best-swipe.min.js' :
    'react-best-swipe.js';

if (env === 'production') {
    pluginsList.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            output: { comments: false }
        })
    );
}

const config = {
    entry: path.join(__dirname, 'src/ReactBestSwipe'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: outputFileName,
        library: 'ReactSwipe',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },

    externals: webpackUMDExternal({
        'react': 'React',
        'swipe-js-iso': 'Swipe'
    }),

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    plugins: pluginsList,

    module: {
        //preLoaders: [{
        //    test: /\.jsx?$/,
        //    loaders: ['eslint'],
        //    exclude: /node_modules/
        //}],

        loaders: [
            //.jsx 文件使用 es6 react处理
            { test: /\.(jsx|js)$/, loader: 'babel-loader',exclude: /(node_modules|bower_components)/,query: {
                presets: ['es2015','react']
            }}

        ]
    }
};

module.exports = config;
