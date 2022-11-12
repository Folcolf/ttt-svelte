import { svelte } from '@sveltejs/vite-plugin-svelte'
import legacy from '@vitejs/plugin-legacy'
import { defineConfig, loadEnv } from 'vite'

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return defineConfig({
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
        bootstrap: '/node_modules/bootstrap',
        components: '/src/components',
        interfaces: '/src/interfaces',
        services: '/src/services',
        stores: '/src/stores',
        types: '/src/types',
        views: '/src/views',
      },
    },
    server: {
      port: 3000,
      proxy: {
        '/api': {
          target: 'http://localhost:8080',
        },
        '/ws': {
          target: 'ws://localhost:8080/api',
        },
      },
    },
    optimizeDeps: { exclude: ['svelte-navigator'] },
  })
}
