module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [`plugin:react/recommended`, `google`, `prettier`, `next/core-web-vitals`],
  parser: `@typescript-eslint/parser`,
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: `module`,
  },
  plugins: [`react`, `@typescript-eslint`, `prettier`, `babel`],
  rules: {
    'require-jsdoc': 0,
    'arrow-body-style': [`warn`, `always`],
    'eol-last': [`error`, `always`],
    'linebreak-style': [`error`, `unix`],
    'no-multiple-empty-lines': [
      `error`,
      {
        max: 1,
        maxEOF: 2,
      },
    ],
    'arrow-body-style': `off`,
    'prettier/prettier': `error`,
    quotes: [`error`, `backtick`],
    'react/jsx-no-target-blank': [
      `error`,
      {
        allowReferrer: true,
      },
    ],
  },
  settings: {
    react: {
      version: `detect`,
    },
  },
}
