module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/indent': [
      'warn',
      2,
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/quotes': [
      'warn',
      'single',
    ],
    'comma-dangle': [
      'warn',
      'always-multiline',
    ],
  },
};
