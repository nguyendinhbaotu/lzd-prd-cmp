const path = require('path');
const {
  HotModuleReplacementPlugin,
  NamedModulesPlugin
} = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    path.join(__dirname, 'src/index.tsx')
  ],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['react-hot-loader/webpack', 'awesome-typescript-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: 'inline'
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new HotModuleReplacementPlugin(),
    new NamedModulesPlugin(),
  ]
};