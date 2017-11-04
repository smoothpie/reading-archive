var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require ('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
module: {
  rules: [
    {
      test: [/\.js$/, /\.jsx?$/],
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
          presets: ['es2015', 'stage-2', 'react'],
	  plugins: ['transform-decorators-legacy']
             }
    },
    {
      test: /\.json$/,
      use: 'json-loader'
    },
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader'
      })
    },
    {
      test: [/\.png$/, /\.jpe?g$/, /\.svg$/],
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }
      ]
    },
    {
      test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader"
    },
    {
  test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
  loader: 'file-loader'
},
  ]
},
plugins: [new HtmlWebpackPlugin({
  template: './public/index.html'
}),
   new ExtractTextPlugin('./bundle.css')
 ]
}
