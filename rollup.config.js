import path from 'path'
import cssnano from 'cssnano'
import less from 'rollup-plugin-less'
import babel from '@rollup/plugin-babel'
import vuePlugin from 'rollup-plugin-vue'
import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import visualizer from 'rollup-plugin-visualizer'
import rollupPluginResolve from 'rollup-plugin-node-resolve'
const packageName = require('./package.json').name

const resolve = function (filePath) {
  return path.join(__dirname, './', filePath)
}

const extensions = ['.js', '.ts', '.tsx']

const outputFiles = (fileName, fileType, opt) => {
  let outputConfig = {
    name: fileName,
    file: resolve(`dist/${fileName}.${fileType}.js`)
  }
  if (opt) {
    outputConfig = {
      ...outputConfig,
      ...opt
    }
  }
  return outputConfig
}
const outputList = [
  {
    name: packageName,
    type: 'umd',
    opt: {
      format: 'umd',
      globals: {
        vue: 'Vue'
      }
    }
  },

  {
    name: packageName,
    type: 'common',
    opt: {
      format: 'cjs',
      exports: 'default',
      globals: {
        vue: 'Vue'
      }
    }
  },
  {
    name: packageName,
    type: 'esm',
    opt: {
      format: 'esm',
      globals: {
        vue: 'Vue'
      }
    }
  }
]

const rollupConfig = {
  input: resolve('src/index.js'),
  output: outputList.map(({ name, type, opt }) => outputFiles(name, type, opt)),
  external: ['vue'],
  plugins: [
    rollupPluginResolve({
      extensions: ['.vue', '.tsx', '.ts']
    }),
    vuePlugin(),
    babel({
      babelHelpers: 'runtime',
      extensions: extensions,
      exclude: '**/node_modules/**'
    }),
    commonjs(),
    terser(),
    less(),
    cssnano()
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
