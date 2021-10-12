module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/recommended', 'prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    semi: [1, 'never'],
    quotes: [1, 'single'],
  },
}
