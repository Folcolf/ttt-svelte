<script>
  import { user } from 'src/stores/auth'
  import { useLocation, useNavigate } from 'svelte-navigator'

  const navigate = useNavigate()
  const location = useLocation()

  $: if (!$user) {
    navigate('/login', {
      state: { from: $location.pathname },
      replace: true,
    })
  }
</script>

{#if $user}
  <slot />
{/if}
