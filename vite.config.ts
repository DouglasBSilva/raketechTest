import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteSSR from 'vite-ssr/plugin.js'
import path from 'path'

export default defineConfig({
  plugins: [
    viteSSR(),
    vue()
  ],
  resolve: {
    alias: {
      $components: path.resolve('./src/components'),
      $types: path.resolve('./src/types'),
      $store: path.resolve('./src/store')
    }
  }
})
