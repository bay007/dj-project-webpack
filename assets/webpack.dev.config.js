const webpack = require('webpack');
const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var BundleTracker = require('webpack-bundle-tracker');

const myModules = require("./mix")

module.exports = {
    entry: myModules,
    devtool: 'inline-source-map',
    watchOptions: {
        ignored: ['node_modules']
    },

    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }, {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
        ]
    },
    resolve: {
        extensions: ['.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: "[name].js",
        filename: "[name].js",
    },
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new MiniCSSExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].[chunkhash:10].css',
            chunkFilename: '[name].[chunkhash:4].css'
        }),
        new BundleTracker({ path: 'dist', filename: './webpack-stats.json', logTime: true }),
        new CleanWebpackPlugin({
            inject: true,
            template: 'index.html'
        }),
    ],
    optimization: {
        splitChunks: {
            name:"vendors",
            chunks: 'all',
        },
    },
}