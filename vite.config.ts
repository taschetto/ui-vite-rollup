import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import glob from 'glob';

function getEntrypoints() {
  const entrypoints = {};
  glob
    .sync(path.resolve(__dirname, 'src/entrypoints/**/*.tsx'))
    .forEach(entry => {
      const name = entry.match(/([^/]+)\.tsx$/)[1];
      entrypoints[name] = entry;
    });
  return entrypoints;
}

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: getEntrypoints(),
      output: {
        dir: 'dist',
        format: 'es',
        assetFileNames: '[name][extname]',
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        sourcemap: true,
      },
    },
  },
});
