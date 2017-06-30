var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    'image-load': "./index.js",
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].min.js',
    library: 'imageLoad',
    libraryTarget: 'umd',
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: true },
    }),
  ],
};
