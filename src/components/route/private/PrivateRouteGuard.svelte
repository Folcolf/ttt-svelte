<script>
  import { navigate } from 'svelte-navigator'

  import { show } from 'stores/snackbar'
  import { check, user } from 'stores/auth'

  $: check().catch((e) => {
    console.log(e)
    show('warning', 'You need to login first')
    navigate('/login', { replace: true })
  })
</script>

{#if $user}
  <slot />
{/if}
