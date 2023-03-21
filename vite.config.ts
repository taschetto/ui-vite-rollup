import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        Component: 'src/Component.tsx',
      },
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
