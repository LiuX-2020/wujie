const { Configuration } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 这个是不需要安装的，是webpack5自带的
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
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
    }),
    new ModuleFederationPlugin({
      // 包名
      name: "remote",
      // 文件名
      filename: "remoteEntry.js",
      // 暴露出去的文件
      exposes: {
        "./addList": "./list.js" // 暴露模块的路径
      }
    })
  ]
}
module.exports = config