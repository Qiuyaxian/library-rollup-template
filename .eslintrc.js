module.exports = {
  root: true,
  extends: ['plugin:vue/essential'],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      jsx: true,
      modules: true
    },
    allowImportExportEverywhere: true,
    ecmaVersion: 6,
    sourceType: 'module'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
