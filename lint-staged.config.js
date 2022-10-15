module.exports = {
  'src/**/*.{js}': ['eslint --cache --fix', 'prettier --write', 'git add'],
  'src/**/*.{css, less}': [
    'stylelint --cache --fix',
    'prettier --write',
    'git add'
  ]
}
