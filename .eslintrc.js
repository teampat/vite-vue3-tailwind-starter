module.exports = {
    env: {
      browser: true,
      node: true,
    },
    extends: [
      'plugin:vue/recommended',
      '@vue/prettier',
      'plugin:prettier/recommended',
    ],
    parserOptions: {
      parser: 'babel-eslint',
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: ['vue', 'prettier'],
    rules: {
      indent: ['error', 2],
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: false,
        },
      ],
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
  }
  