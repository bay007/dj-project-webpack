const webpack = require('webpack');

const path = require('path');
const glob = require('glob');

var BundleTracker = require('webpack-bundle-tracker');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const cssnano = require('cssnano');

const myModules = require("./mix");

const PATHS = {
    src: path.join(__dirname, 'src')
}

module.exports = {
    entry: myModules,
    mode: 'production',
    optimization: {
        minimize: true,
    },
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
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('tailwindcss'),
                                require('autoprefixer')
                            ],
                        },
                    },
                ]
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCSSExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].[chunkhash:10].css',
            chunkFilename: '[name].[chunkhash:4].css'
        }),
        new BundleTracker({ path: 'dist', filename: './webpack-stats.json', logTime: true }),

        new webpack.HashedModuleIdsPlugin({
            context: __dirname,
            hashFunction: 'sha256',
            hashDigest: 'hex',
            hashDigestLength: 20
        }), // so that file hashes don't change unexpectedly
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.(sa|sc|c)ss$/g,
            cssProcessor: cssnano,
            cssProcessorOptions: { discardComments: { removeAll: true } },
            canPrint: true,
        }),
    ],
    optimization: {
        splitChunks: {
            name: "vendors",
            chunks: 'all',
        },
    },
}