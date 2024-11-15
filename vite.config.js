import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  publicDir: 'public',
  root: './',
  build: {
    outDir: 'dist',
  },
  plugins: [
    eslint({
      exclude: ['/virtual:/**', 'node_modules/**'],
      cache: false,
      fix: true,
    }),
  ],
});
