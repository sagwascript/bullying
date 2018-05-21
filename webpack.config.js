const path = require('path')
const nodeExternals = require('webpack-node-externals')

const config = {
  context: __dirname,
  target: 'node',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'cheap-sourcemap-eval',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js/,
        loader: 'babel-loader',
        options: {
          plugins: ['transform-regenerator', 'transform-runtime']
        },
        exclude: /(node_modules)/
      },
      {
        test: /\.(graphql|gql)/,
        loader: 'raw-loader',
        exclude: /(node_modules)/
      }
    ]
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  }
}

module.exports = config
