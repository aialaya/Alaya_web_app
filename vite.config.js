import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import postcssPxToRem from 'postcss-pxtorem'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  define: {
    'process.env.VITE_API_TARGET': JSON.stringify('https://xxx.com')
  },
  server: {
    host: '0.0.0.0',
    port:'3000',
    proxy: {
      "^/api": {
        target: "https://xxx.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  css: {
    postcss: {
      plugins: [
        postcssPxToRem({
          rootValue: 16,
          propList: ['*'],
          selectorBlackList: [],
          minPixelValue: 2
        })
      ]
    }
  }
})
