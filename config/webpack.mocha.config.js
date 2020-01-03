const webpackBaseConfig = require('./webpack.base.config')
const webpackMerge = require('webpack-merge')
const Webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

module.exports = webpackMerge(webpackBaseConfig({mode: 'test'}), {
  entry: null,
  output: null,
  devtool: 'eval',
  /**
   * Test in this project needs development
   * For more info See this
   * @link https://medium.com/webpack/webpack-4-mode-and-optimization-5423a6bc597a
   */
  mode: 'development',
  // for webpack karma debug
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('test'),
    }),
  ],
  node: {
    dns: 'mock',
    fs: 'empty',
    path: true,
    url: false,
  },
  target: 'node',
  externals: [nodeExternals()],
})
