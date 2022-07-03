<script lang="ts">
  import { Snackbar } from 'svelte-materialify/src'
  import { fly } from 'svelte/transition'

  import { snackbar, message, type } from 'src/stores/snackbar'

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

<main
  in:fly={{ y: -50, duration: 250, delay: 300 }}
  out:fly={{ y: -50, duration: 250 }}
>
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
