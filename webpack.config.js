const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP = 'app';
const APP_ROOT = path.resolve(__dirname, APP);
const BUILD_DIR = 'dist';

module.exports = {
    mode: 'development',
    entry: [path.resolve(APP_ROOT, 'index.jsx')],
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, BUILD_DIR),
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx', 'json'],
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                }],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  'style-loader',
                  // Translates CSS into CommonJS
                  'css-loader',
                  // Compiles Sass to CSS
                  'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(APP_ROOT, 'index.html') }),
    ],
    devServer: {
        port: 3000,
        hot: true,
        host: '0.0.0.0',
        contentBase: path.resolve(__dirname, APP),
        historyApiFallback: true,
    },
};
