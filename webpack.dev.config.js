const webpack = require('webpack');
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { myModules } = require("./mix")
console.log(myModules)
module.exports = {
    entry: {
        'index': './src/js/index.js',
        'product': './src/js/products.js',
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js']
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
        new CleanWebpackPlugin({
            inject: true,
            template: 'index.html'
        }),
        new HtmlWebpackPlugin({
            test: /\.html$/,
            loader: "file-loader",
            include: path.resolve(__dirname, 'src')
        }),
        new webpack.HashedModuleIdsPlugin({
            context: __dirname,
            hashFunction: 'sha256',
            hashDigest: 'hex',
            hashDigestLength: 20
        }), // so that file hashes don't change unexpectedly
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
}