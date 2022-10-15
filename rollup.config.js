import path from 'path'
import babel from '@rollup/plugin-babel'
import vuePlugin from 'rollup-plugin-vue'
import commonjs from '@rollup/plugin-commonjs'
import rollupPluginResolve from 'rollup-plugin-node-resolve'
import visualizer from 'rollup-plugin-visualizer'

const resolve = function (filePath) {
  return path.join(__dirname, './', filePath)
}

const extensions = ['.js', '.ts', '.tsx']
const rollupConfig = {
  input: resolve('src/index.js'),
  output: [
    {
      name: 'demo',
      file: resolve('dist/tabbar.umd.js'),
      format: 'umd',
      globals: {
        vue: 'Vue' // 告诉rollup全局变量Vue即是vue
      }
    },
    {
      name: 'demo',
      file: resolve('dist/tabbar.common.js'),
      format: 'cjs',
      exports: 'default',
      globals: {
        vue: 'Vue' // 告诉rollup全局变量Vue即是vue
      }
    },
    {
      name: 'demo',
      file: resolve('dist/tabbar.esm.js'),
      format: 'esm',
      globals: {
        vue: 'Vue' // 告诉rollup全局变量Vue即是vue
      }
    }
  ],
  external: ['vue'],
  plugins: [
    rollupPluginResolve({
      extensions: ['.vue', '.tsx', '.ts']
    }),
    vuePlugin(),
    babel({
      babelHelpers: 'bundled',
      extensions: extensions,
      exclude: '**/node_modules/**'
    }),
    commonjs()
  ]
}

if (process.env.use_analyzer) {
  rollupConfig.plugins.push(
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true
    })
  )
}

export default rollupConfig
