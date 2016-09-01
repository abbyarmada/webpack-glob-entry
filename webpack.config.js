module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: './lib',
    libraryTarget: "commonjs2"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  },
  externals: [
    'glob'
  ],
  target: 'node'
}