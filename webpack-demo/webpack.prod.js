const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");

module.exports = merge(common, {
    mode: 'production',
    entry: {
        main: './src/index.js',
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name][hash].js'
    }
});