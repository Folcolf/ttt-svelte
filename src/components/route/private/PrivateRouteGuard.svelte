<script>
  import { navigate } from 'svelte-navigator'

  import { check, user } from 'stores/auth'

  $: check()

  $: if (!$user) {
    navigate('/login', {
      replace: true,
    })
  }
</script>

{#if $user}
  <slot />
{/if}
