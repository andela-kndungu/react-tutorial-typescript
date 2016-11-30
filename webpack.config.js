const webpack = require('webpack');

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    './src/index.tsx'
  ],
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
    publicPath: "/assets/"
  },
  devtool: 'eval-source-map',
  resolve: {
    extensions: [
      '',
      '.ts',
      '.tsx',
      '.js'
    ]
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ],
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    inline: true,
    contentBase: 'dist',
    hot: true,
  }
};
