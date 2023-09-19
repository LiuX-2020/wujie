const { Configuration } = require('webpack')
const path = require('path')
/**
 * @type {Configuration} //配置智能提示
 */
const config = {
  entry: './src/index.ts',
  mode: 'none',
  // 将 vue wujie 排除，减少包的体积
  externals: {
    "vue": "vue",
    "wujie": "wujie",
  },
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'lib'),
    library: "wujievue", // 全局变量名
    libraryTarget: "umd", // 构建产物模式
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "swc-loader",
      }
    ]
  }
}
module.exports = config