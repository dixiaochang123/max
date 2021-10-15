const path = require('path')
function resolve (dir) {
  return path.join(__dirname, './', dir)
}
module.exports = {
  publicPath:  './', // 默认'/'，部署应用包时的基本 URL
  outputDir: 'dist',
  lintOnSave: false,  
  assetsDir: '', // 相对于outputDir的静态资源(js、css、img、fonts)目录
  runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
  productionSourceMap: false, // 生产环境的 source map
  configureWebpack: {
    devtool: 'source-map',
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  configureWebpack: config => {},
  chainWebpack: config => {}
}