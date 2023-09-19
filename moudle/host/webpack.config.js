const { Configuration } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
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
      name: "host",
      filename:"hostEntry.js",
      remotes: {
        //对应关系remote对应的remote项目ModuleFederationPlugin的name 后面url对应的port以及对应ModuleFederationPlugin的filename
        remote:"remote@http://192.168.2.173:9002/remoteEntry.js"
      }
    })
  ]
}
module.exports = config