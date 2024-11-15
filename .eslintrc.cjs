// .eslintrc.cjs
// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ['import', 'prettier'],
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'import/unambiguous': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js'],
        path: ['src'],
        moduleDirectory: ['node_modules'],
      },
    },
  },
};
