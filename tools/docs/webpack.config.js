const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const path = require('path');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: './src/main.ts',
  mode: 'production',
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
          MiniCssExtractPlugin.loader,
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
    path: path.resolve(__dirname, './dist'),
    // publicPath: '.'
  },
  plugins: [
    new FaviconsWebpackPlugin({
      logo: '../../pages/assets/icon-512x512.png',
      publicPath: '.',
      outputPath: './assets'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      title: 'Tempo',
      googleAnalytics: {
        trackingId: 'UA-589893-23',
        pageViewOnLoad: true
      },
      meta: [
        {
          name: 'description',
          content: 'Documentation site for Tempo libraries.'
        }
      ],
      favicon: '../../pages/assets/icon-512x512.png',
      mobile: true,
      lang: 'en-US',
      inlineManifestWebpackName: 'webpackManifest'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new WorkboxPlugin.GenerateSW({
      exclude: [/\.(?:ts)$/],
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: true,
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
};
