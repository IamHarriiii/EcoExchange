/* eslint-disable no-undef */
/* eslint-env node */
module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    commonjs: true
  },
  parserOptions: {
    "ecmaVersion": 2018,
    "sourceType": "script"
  },
  globals: {
    "module": true,
    "require": true,
    "process": true
  },
  extends: [
    "eslint:recommended",
    "google"
  ],
  rules: {
    "no-restricted-globals": ["error", "name", "length"],
    "prefer-arrow-callback": "error",
    "quotes": ["error", "double", {"allowTemplateLiterals": true}]
  },
  overrides: [
    {
      files: ["**/*.spec.*", "**/*.test.*"],
      env: {
        mocha: true,
        node: true
      },
      globals: {
        "require": true,
        "process": true
      }
    }
  ]
}
