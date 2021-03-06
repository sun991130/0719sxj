
let path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir)
}

const px2rem = require('postcss-px2rem')
// 配置postcs-px2rem
const postcss = px2rem({
  remUnit: 37  //设计稿等分之后的值，等分的比例同页面rem的比例是一致的
})
module.exports = {

  // 选项...
  runtimeCompiler: true,//可以通过tem运行
  lintOnSave: false, // 关闭EsLint的规则
  css: { // 添加postcss配置
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  },

  configureWebpack: {// 当前配置需要写入该选项中
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js', 
        '@': resolve('src'), // 设置文件查找路径，可简写文件查找路径
        'components': resolve('src/components'),
      }
    }
  }

}