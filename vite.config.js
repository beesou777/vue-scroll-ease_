import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/index.js', // Entry file
      name: 'VueScrollEffects',
      fileName: (format) => `vue-scroll-effects.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
        format: 'umd', // Ensure UMD format
        exports: 'named',
      }
    }
  }
});
