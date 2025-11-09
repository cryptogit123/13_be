import typescriptEslintParser from '@typescript-eslint/parser';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

const ignoreConfig = {
  ignores: [
    '**/node_modules/**',
    '**/dist/**',
    '**/test/**',
    '**/coverage/**',
    '**/*.config.mjs',
    '**/*spec.ts',
  ],
};

const baseConfig = {
  files: ['**/*.ts'],
  languageOptions: {
    parser: typescriptEslintParser,
    ecmaVersion: 'latest',
    sourceType: 'module',
    globals: {
      Bun: 'readonly',
      console: 'readonly',
      setTimeout: 'readonly',
      Promise: 'readonly',
      process: 'readonly',
      __dirname: 'readonly',
      __filename: 'readonly',
      module: 'readonly',
      require: 'readonly',
      exports: 'readonly',
    },
    parserOptions: {
      project: ['./tsconfig.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
  plugins: {
    '@typescript-eslint': typescriptEslintPlugin,
    import: importPlugin,
    prettier: prettierPlugin,
  },
  rules: {
    ...typescriptEslintPlugin.configs['recommended-type-checked'].rules,
    ...typescriptEslintPlugin.configs['stylistic-type-checked'].rules,
    ...importPlugin.configs.recommended.rules,
    ...prettierConfig.rules,
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'enum',
        format: ['PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'enumMember',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    'import/default': 'off',
    'import/namespace': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-unresolved': 'off',
    'prettier/prettier': 'error',
    'max-lines': ['error', { max: 700, skipBlankLines: true, skipComments: true }],
  },
};

export default [ignoreConfig, baseConfig];

