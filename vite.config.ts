import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import typescript from 'rollup-plugin-typescript2';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        Component: 'src/entries/ComponentEntry.tsx',
      },
      plugins: [typescript()],
    },
  },
});
