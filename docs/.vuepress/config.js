const packageData = require('../../package.json')
const version = process.env.VERSION || packageData.version
module.exports = {
  title: `${packageData.name} v(${version})`,
  description: 'Just playing around',
  base: '/',
  themeConfig: {
    // 头部导航栏
    nav: [
      {
        text: 'Github',
        link: 'https://github.com/Qiuyaxian/library-rollup-template.git'
      }
    ],
    sidebar: ['/', '/props', '/events', '/slots']
  }
}
