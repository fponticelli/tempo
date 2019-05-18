const path = require('path');

module.exports = {
  entry: './src/main.ts',
  mode: 'production',
  optimization: {
    usedExports: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.ts' ]
  },
  output: {
    filename: 'www/index.js',
    path: __dirname
  }
};
