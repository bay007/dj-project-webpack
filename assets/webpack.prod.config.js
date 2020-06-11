const webpack = require('webpack');
const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var BundleTracker = require('webpack-bundle-tracker');
const myModules = require("./mix")

module.exports = {
    entry: myModules,
    output: {
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: "[name].[chunkhash:10].js",
        filename: "[name].[chunkhash:4].js",
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
    plugins: [
        new MiniCSSExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            chunkFilename: '[name].css'
        }),
        new BundleTracker({ path: 'dist', filename: './webpack-stats.json', logTime: true }),
        new CleanWebpackPlugin(),
        new webpack.HashedModuleIdsPlugin({
            context: __dirname,
            hashFunction: 'sha256',
            hashDigest: 'hex',
            hashDigestLength: 20
        }), // so that file hashes don't change unexpectedly
    ],
    optimization: {
        splitChunks: {
            name: "vendors",
            chunks: 'all',
        },
    },
}