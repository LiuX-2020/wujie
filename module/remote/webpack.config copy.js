const { Configuration } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
/**
 * @type {Configuration} //配置智能提示
 */
const config = {
  mode: "none",
  entry: "./index.js",
  output: {
    filename: "bundle.js"
  },
  devServer: {
    port: 9001
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    })
  ]
}
module.exports = config