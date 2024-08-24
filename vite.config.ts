import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'VueScrollEase',
      fileName: (format) => `vue-scroll-ease.${format}.ts` 
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
        format: 'umd', 
        exports: 'named',
      }
    }
  }
});
