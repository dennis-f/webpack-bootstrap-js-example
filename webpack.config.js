const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const plugins = [
  new CleanWebpackPlugin('dist/*'),
  new CopyWebpackPlugin([{
    from: 'src/index.html',
    to: 'index.html'
  }])
];

module.exports = {
  entry: {
    index: './src/index.js',
    vendor: ['jquery', 'bootstrap', 'popper.js']
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        },

      }
    ]
  },
  plugins : plugins
};