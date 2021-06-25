module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: ['airbnb-base', 'eslint:recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12
  },
  plugins: ['@typescript-eslint', 'prettier'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  rules: {
    // Diff to airbnb: Allow use of for…in loops
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForOfStatement',
        message:
          'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.'
      },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
      }
    ],
    semi: ['error', 'always'],
    'no-console': 'off',
    'prettier/prettier': [
      2,
      {
        semi: true,
        singleQuote: true,
        printWidth: 100,
        bracketSpacing: true,
        tabWidth: 2,
        arrowParens: 'always',
        trailingComma: 'none'
      }
    ],
    'no-use-before-define': [
      'error',
      {
        functions: true,
        classes: true
      }
    ],
    'no-var': 'error',
    'prefer-const': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        '': 'never'
      }
    ]
  }
};
