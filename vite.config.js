import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'ui-components',
      fileName: (format) => `ui-components.${format}.js`,
    },
    rollupOptions: {
      // createEndpoints sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        '@headlessui/vue',
        '@heroicons/vue/solid',
        '@vueuse/components',
        '@vueuse/core',
        'vue',
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});

