import { svelte } from '@sveltejs/vite-plugin-svelte'
import legacy from '@vitejs/plugin-legacy'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    svelte({
      configFile: 'svelte.config.js',
    }),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
      interfaces: '/src/interfaces',
      services: '/src/services',
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
      },
    },
  },
  optimizeDeps: { exclude: ['svelte-navigator', 'svelte-materialify'] },
})
