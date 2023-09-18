module.exports = {
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',

    'plugin:@typescript-eslint/recommended',

    'prettier',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['prettier', 'simple-import-sort', 'unused-imports'],
  rules: {
    'unused-imports/no-unused-imports': 'error',

    // Automatically (try to) sort import statements
    // https://github.com/lydell/eslint-plugin-simple-import-sort
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
}
