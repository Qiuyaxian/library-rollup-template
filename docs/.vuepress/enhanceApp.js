import DemoBlock from './components/demo-block'
export default ({ Vue, isServer }) => {
  if (!isServer) {
    window.global = window
    return import('../../src/index')
      .then((module) => {
        Vue.use(DemoBlock, {
          jsRes: ['//unpkg.com/vue/dist/vue.js']
        })
        Vue.use(module.default)
      })
      .catch((e) => {
        console.error(e)
      })
  }
}
