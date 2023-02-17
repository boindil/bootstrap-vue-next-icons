/// <reference types="vitest" />

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    sourcemap: true,
    minify: true,
    lib: {
      entry: resolve(__dirname, 'src/BootstrapVueIcons.ts'),
      name: 'bootstrap-vue-next-icons',
      fileName: 'bootstrap-vue-next-icons',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        'bootstrap',
        'bootstrap/js/dist/alert',
        'bootstrap/js/dist/collapse',
        'bootstrap/js/dist/modal',
        'bootstrap/js/dist/offcanvas',
        'bootstrap/js/dist/popover',
        'bootstrap/js/dist/carousel',
        'bootstrap/js/dist/dropdown',
        'bootstrap/js/dist/tooltip',
        'vue',
      ],
      output: {
        exports: 'named',
        assetFileNames: `bootstrap-vue-next-icons.[ext]`, //without this, it generates build/styles.css
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          'vue': 'Vue',
          'bootstrap': 'Bootstrap',
          'bootstrap/js/dist/collapse': 'Collapse',
          'bootstrap/js/dist/alert': 'Alert',
          'bootstrap/js/dist/carousel': 'Carousel',
          'bootstrap/js/dist/dropdown': 'Dropdown',
          'bootstrap/js/dist/modal': 'Modal',
          'bootstrap/js/dist/offcanvas': 'Offcanvas',
          'bootstrap/js/dist/popover': 'Popover',
          'bootstrap/js/dist/tooltip': 'Tooltip',
        },
      },
    },
  },

  css: {preprocessorOptions: {scss: {charset: false}}},

  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    dts({
      tsconfigPath: './tsconfig.app.json',
      outDir: './dist',
    }),
  ],

  server: {
    host: true,
  },

  test: {
    environment: 'happy-dom',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
    },
  },
})
