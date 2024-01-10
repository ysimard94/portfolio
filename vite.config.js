import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import path from 'path'

// https://vitejs.dev/config/

// Helper function to get dirname
const __dirname = fileURLToPath(new URL('.', import.meta.url));

console.log('__dirname:', __dirname + 'src/locale/'); 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueI18nPlugin({
      include: path.resolve(__dirname, 'src/locale/**'), // Use path.resolve here
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Use path.resolve here
    },
  },
});