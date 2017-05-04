var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/basic.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
        ]
    },
    devtool: 'source-map'
};
