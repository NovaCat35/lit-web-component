import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: true,
    manifest: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'), // Entry point for my library
      fileName: (format) => `my-components.${format}.js`, // File output name
      formats: ['es', 'umd'],
      name: 'LitWebComponents',
    },
    rollupOptions: {
      external: ['lit'],
      output: {
        globals: {
          lit: 'Lit',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@components': resolve(__dirname, './src/components'),
    },
  },
  server: {
    open: true,
  },
});