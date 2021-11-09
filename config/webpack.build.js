const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

const config = {
  mode: 'production',
  entry: './src/AnglePicker/index.jsx',
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: 'index.cjs.js',
    libraryTarget: 'commonjs2',
  }
}

module.exports = merge(common, config);
