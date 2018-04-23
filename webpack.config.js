var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            { test: /\.css$/, use: 'css-loader' },
            { test: /\.vue$/, use: 'vue-loader' },
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader'
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './index.html' })
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 3000
    }
}