module.exports = {
  root: true,
  plugins: ["prettier"],
  env: {
    node: true,
    es6: true,
  },
  extends: ["eslint:recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 2017,
  },
  rules: {
    "prettier/prettier": 2,
    "no-use-before-define": ["error", { functions: true, classes: true }],
    "no-var": "error",
    "prefer-const": "error",
  },
};
