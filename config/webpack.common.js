const path = require('path')

const config = {
  module: {
    rules: [
      {
        test: /\.(m?js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, '../src'),
    },
    extensions: ['.js', '.jsx'],
  },
}

module.exports = config;