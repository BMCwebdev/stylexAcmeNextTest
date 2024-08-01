/// <reference types="vitest" />

import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import styleX from 'vite-plugin-stylex';

export default defineConfig({
  plugins: [tsconfigPaths(), styleX()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './test/setup.ts',
  },
});
