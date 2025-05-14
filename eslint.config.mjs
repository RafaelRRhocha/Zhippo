import js from '@eslint/js';
import * as prettier from 'eslint-config-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettierPlugin from 'eslint-plugin-prettier';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import mantine from 'eslint-config-mantine';

export default [
  {
    ignores: ['dist', '.eslintrc.*'],
  },
  js.configs.recommended,

  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: prettierPlugin,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      ...mantine.rules,
      // ...next.rules, // Comentado para teste
      ...prettier.rules,

      'prettier/prettier': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      // Optional: you can tweak these
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react-refresh/only-export-components': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        alias: {
          map: [['@', './src']],
          extensions: ['.ts', '.js', '.tsx', '.jsx', '.json'],
        },
      },
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: await import('@typescript-eslint/parser').then(mod => mod.default),
    },
    plugins: {
      '@typescript-eslint': await import('@typescript-eslint/eslint-plugin').then(mod => mod.default),
    },
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  },
];
