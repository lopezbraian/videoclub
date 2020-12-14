const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const webpack = require('webpack')
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()]
  },
  entry: {
    app: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'https://videoclub-tan.vercel.app/',
    filename: 'bundle.[hash].js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    open: true,
    hot: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: 'css/'
            }
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'assets/'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css'
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DllReferencePlugin({
      manifest: require('./modules-manifest.json')
    })
  ]
}
