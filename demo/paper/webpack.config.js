var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
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
  resolve: {
    extensions: [ '.ts', '.js' ],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './build'),
    // publicPath: '.'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Tempo • PaperJS',
      meta: {
        description: "Mini application to monitor regressions and performance improvements across versions of Tempo.",
        priority: "3"
      }
    }),
  ],
  optimization: {
    usedExports: true,
  },
  devServer: {
    port: 1234
    // contentBase: './build'
  }
};
