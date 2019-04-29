var path = require('path');
var glob = require('glob');

module.exports = {
    entry: {
        dependencies: './js/dependencies.js',
        app: glob.sync('./js/app/*.js'),
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: 'dist'
    },
    devServer: {
        host: '127.0.0.1',
        port: '8080',
        open: true
    }
}
