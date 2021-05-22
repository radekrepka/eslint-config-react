module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended', 'plugin:import/errors', 'plugin:import/warnings'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:import/typescript', 'plugin:@typescript-eslint/recommended', 'prettier'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': { typescript: { extensions: ['.js', '.jsx', '.ts', '.d.ts', '.tsx'] } },
  },
  plugins: ['import'],
  rules: {
    'import/no-cycle': 'error',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};
