//import builtins from 'rollup-plugin-node-builtins'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import visualizer from 'rollup-plugin-visualizer'

const config = defineConfig({
  resolve: {
    alias: {},
  },

  build: {
    minify: true,
    lib: {
      entry: resolve(__dirname, 'src/BootstrapVueIcons.ts'),
      name: 'bootstrap-vue-3-icons',
      fileName: (format) => `bootstrap-vue-3-icons.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        exports: 'named',
        assetFileNames: `bootstrap-vue-3-icons.[ext]`, //without this, it generates build/styles.css
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },

  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    visualizer(), // generates admin/stats.html on npm run build
  ],

  server: {
    host: true,
    port: 8080, //this is the default
  },
  preview: {
    port: 8080
  },
})

export default config
