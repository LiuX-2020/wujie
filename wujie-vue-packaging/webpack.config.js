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
    // 配置导出库的名称
    library: 'wujievue',
    // 配置以何种方式导出库
    libraryTarget: 'umd',
    // 设置为 true 将会把 AMD 模块命名为 UMD 构建
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        // use: "ts-loader",
        use: "swc-loader",
      }
    ]
  }
}
module.exports = config