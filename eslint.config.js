import eslintReact from 'eslint-plugin-react';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import eslintReactRefresh from 'eslint-plugin-react-refresh';

import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default tseslint.config(
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'react-hooks': eslintReactHooks,
      react: eslintReact,
      'react-refresh': eslintReactRefresh,
      prettier: prettierPlugin,
    },
  },
  {
    ignores: ['node_modules', 'dist', 'eslint.config.js'],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2024,
      },
      parserOptions: {
        project: ['tsconfig.app.json', 'tsconfig.node.json', 'tsconfig.json'],
      },
    },
  },
  {
    files: ['**/*.{ts, tsx}'],
    rules: {
      ...eslintConfigPrettier.rules,
      ...prettierPlugin.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'prefer-const': 'error',
    },
  }
);
