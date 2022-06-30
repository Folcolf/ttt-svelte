<script>
  import Nav from '../navbar/Nav.svelte'
  import Empty from './Empty.svelte'

  export let snackbar
  export let snackbarMessage
  export let snackbarType
</script>

<Nav />
<Empty bind:snackbar {snackbarMessage} {snackbarType}>
  <slot />
</Empty>
