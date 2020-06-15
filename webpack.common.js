const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            title: 'star wars',
            template: 'index.html'

        }),
    ],
    module: {
         rules: [
            {
                test: /\.js$/,
                use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
                }
            },
           {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
           },
           {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
         ],
    },
};