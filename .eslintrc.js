module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    'no-trailing-spaces': 0,
    'eol-last': 0,
    'no-multiple-empty-lines': 0
  },
  globals: {}
}
