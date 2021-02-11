const path = require("path");
module.exports = {
  entry: "./src/lib/index.js",
  mode: 'production',
  output: {
      filename: 'index.js',
      path: path.resolve(__dirname, './src/lib/dist'),
  },
  module:{
      rules:[{
          loader: 'babel-loader',
          test: /\.js$|jsx/,
          exclude: /node_modules/
      }]
  },
}