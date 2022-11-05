import sveltePreprocess from 'svelte-preprocess'

const dev = process.env.NODE_ENV === 'development'

export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess({ typescript: true, scss: true }),
  compilerOptions: {
    // enable run-time checks when not in production
    dev,
  },
}
