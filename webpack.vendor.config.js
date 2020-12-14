const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    modules: [
      'react',
      'react-dom'
    ]
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      context: path.join(__dirname, 'dist'),
      name: '[name].[hash]',
      path: path.join(__dirname, '[name]-manifest.json')
    })
  ]
}
