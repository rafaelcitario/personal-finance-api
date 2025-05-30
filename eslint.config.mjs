import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';


export default defineConfig([
  {
    ignores: ['node_modules', 'dist', 'prisma', 'generated', 'data']
  },
  { files: ['**/*.{js,mjs,cjs,ts,mts,cts}'], plugins: { js }, extends: ['js/recommended'] },
  { files: ['**/*.{js,mjs,cjs,ts,mts,cts}'], languageOptions: { globals: globals.node } },
  tseslint.configs.recommended,
  {
    rules: {
      'semi': 'error',
      'quotes': ['error', 'single'],
      'no-unused-vars': ['warn'],
      'no-console': ['warn']
    }
  }
]);
