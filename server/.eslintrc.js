module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['google'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'valid-jsdoc': 'off',
    'indent': 'off',
    'space-before-function-paren': 'off',
    'new-cap': 'off',
    'operator-linebreak': 'off',
  },
};
