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
      '.js',
      '.jsx'
    ],
    modulesDirectories: ['src', 'node_modules']
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loaders: ['babel', 'ts-loader']
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
