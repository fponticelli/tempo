const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const path = require('path')
const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = {
  entry: './src/main.ts',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './dist')
    // publicPath: '.'
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      title: 'Tempo Docs',
      template: 'index.html',
      googleAnalytics: {
        trackingId: 'UA-589893-23',
        pageViewOnLoad: true
      },
      meta: [
        { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
        { description: 'Documentation site for Tempo libraries.' }
      ],
      favicon: '../../pages/assets/icon-512x512.png'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new WorkboxPlugin.GenerateSW({
      exclude: [/\.(?:ts)$/],
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: true
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
    usedExports: true,
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
  },
  devServer: {
    port: 1234
    // contentBase: './build'
  }
}
