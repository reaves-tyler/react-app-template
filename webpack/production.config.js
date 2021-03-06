/* eslint-disable no-undef */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const outputPath = '../build';

module.exports = {
    mode: 'production',
    entry: {
        bundle: './src/Main.tsx',
    },
    output: {
        filename: '[hash].js',
        path: path.resolve(__dirname, outputPath),
        publicPath: '/',
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 0,
            maxSize: 24000,
        },
    },
    resolve: { extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'] },
    module: {
        rules: [
            { test: /\.(ts|tsx)$/, loader: 'ts-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.pdf$/, use: 'file-loader' },
            { test: /\.jpe?g$|\.gif$|\.ico$|\.png$|\.svg$/, use: 'url-loader' },
            { test: /\.(woff|woff2|ttf|svg|eot|otf)$/, use: 'url-loader' },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './webpack/assets/index.html',
            hash: true,
            meta: {
                viewport: 'width=device-width, initial-scale=1',
            },
            title: 'mp-app',
            inject: 'body',
            filename: './index.html',
            favicon: './webpack/assets/favicon.ico',
        }),
        new webpack.DefinePlugin({
        }),
    ],
};
