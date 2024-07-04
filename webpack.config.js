// webpack.config.js
// this is needed to use -- require('path') -- in script.js, which normally is not supported in browser
const path = require('path');

module.exports = {
    entry: './src/script.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'src'),
    },
    resolve: {
        fallback: {
            path: require.resolve('path-browserify')
        }
    },
    mode: 'development',
};
