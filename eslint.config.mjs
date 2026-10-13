import eslint from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default defineConfig(
  globalIgnores(['**/node_modules/', '**/*.json', '**/build/', '**/dist/']),
  eslint.configs.recommended,
  prettierRecommended,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  importPlugin.flatConfigs.recommended,
  reactHooks.configs.flat['recommended-latest'],
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/extensions': ['.js', '.jsx'],
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx'],
        },
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'function-declaration',
        },
      ],
      camelcase: [
        'error',
        {
          properties: 'never',
        },
      ],
      'spaced-comment': 'error',
      'consistent-return': 'error',
      'no-else-return': 'warn',
      'no-console': [
        'error',
        {
          allow: ['warn', 'error'],
        },
      ],
      'array-callback-return': 'error',
      eqeqeq: ['error', 'always'],
      'logical-assignment-operators': ['error', 'always'],
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      'no-await-in-loop': 'warn',
      curly: ['error', 'all'],
      'constructor-super': 'error',
      'getter-return': 'error',
      'no-constant-condition': 'error',
      'prefer-const': [
        'error',
        {
          destructuring: 'any',
          ignoreReadBeforeAssign: false,
        },
      ],
      'prettier/prettier': [
        'error',
        {
          semi: true,
          singleQuote: true,
          endOfLine: 'auto',
        },
      ],
      'import/no-named-as-default-member': 'off',
      'import/no-named-as-default': 'off',
      'import/no-unresolved': [
        'error',
        {
          ignore: ['\\.(css|png|jpe?g|svg)$'],
        },
      ],
      'import/no-duplicates': [
        'error',
        {
          considerQueryString: true,
        },
      ],
      'import/named': 'error',
      'import/default': 'error',
      'import/order': [
        'error',
        {
          pathGroups: [
            {
              pattern: 'src/**',
              group: 'internal',
            },
            {
              pattern: '**/styles',
              group: 'internal',
            },
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
          },
        },
      ],
    },
  },
);
