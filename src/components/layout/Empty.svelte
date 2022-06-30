<script>
  import { Snackbar } from 'svelte-materialify/src'

  export let snackbar = false
  export let snackbarMessage = ''
  export let snackbarType = 'info'

  const getClass = (type) => {
    switch (type) {
      case 'info':
        return 'primary-color'
      case 'success':
        return 'success-color'
      case 'error':
        return 'error-color'
      default:
        return 'primary-color'
    }
  }
</script>

<main>
  <slot />
</main>

{#if snackbar}
  <Snackbar
    class={getClass(snackbarType) + ' flex-column'}
    bottom
    center
    timeout={2000}
    bind:active={snackbar}
  >
    {snackbarMessage}
  </Snackbar>
{/if}

<style scoped lang="scss">
  main {
    margin: 10% auto;
    height: 100% !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
