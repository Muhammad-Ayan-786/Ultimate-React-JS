import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])

/*
What is eslint.config.js?

- This file is for ESLint, which is a tool that checks my code for errors, bugs, or bad practices.
- It helps me write cleaner and consistent code.
- I can set rules here, like "always use semicolons" or "no unused variables".
- As a beginner, I don’t need to change much. Just know it helps catch mistakes early.
- Later, when my projects get bigger, this file will guide me to write better React/JS code.
*/
