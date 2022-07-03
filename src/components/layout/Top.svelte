<script lang="ts">
  import { Snackbar } from 'svelte-materialify/src'

  import { message, snackbar, type } from 'src/stores/snackbar'

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

{#if $snackbar}
  <Snackbar
    class={getClass($type) + ' flex-column'}
    bottom
    center
    timeout={2000}
    bind:active={$snackbar}
  >
    {$message}
  </Snackbar>
{/if}

<style scoped lang="scss">
  main {
    height: 100% !important;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
