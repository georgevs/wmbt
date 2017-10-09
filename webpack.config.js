const path = require('path');

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  module: {
    rules: [
      { test: /\.js$/, use: ["babel-loader"] },
      { test: /\.ts$/, exclude: /node_modules/, use: ["ts-loader"] }
    ]
  },
  resolve: {
    extensions: [".js", ".ts"]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};