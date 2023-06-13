
module.exports = {
    plugins: {
      "postcss-import": {},
      // to edit target browsers: use "browserslist" field in package.json
      autoprefixer: {
        path: ["./src/*"],
      },
      "postcss-px-to-viewport": {
        viewportWidth: "1920", // 视窗的宽度，对应设计稿的宽度
        // viewportHeight: "1080", // 视窗的高度
        unitPrecision: 5, // 指定px转换为视窗单位值的小数位数(因为无法整除)
        viewportUnit: "vw", // 指定需要转换成的视窗单位，使用vw
        selectorBlackList: [], // 指定不转换为视窗单位的类
        minPixelValue: 1, // 小于或等于1px不转换为视窗单位
        mediaQuery: false, // 允许在媒体查询中转换px
        exclude: /(\/|\\)(node_modules)(\/|\\)/, // 不包含node_modules文件
      },
    },
  }
  
  