const config = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
    '@typescript-eslint/no-explicit-any': [
      'warn',
      {
        ignoreRestArgs: true,
      },
    ],
    '@typescript-eslint/camelcase': [
      'off',
      { properties: 'never', ignoreDestructuring: true },
    ],
    '@typescript-eslint/no-unused-vars': ['error'],
    'react/prop-types': 'off',
    'no-console': 'error',
    'no-warning-comments': [
      'error',
      {
        terms: ['todo', 'fixme'],
      },
    ],
    'import/order': ['error', { 'newlines-between': 'always' }],
    'import/newline-after-import': ['error', { count: 1 }],
    'import/named': 'off',
    'react/display-name': 'off',
  },
  overrides: [
    {
      //require() statements allowed in .js files
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};

module.exports = config;
