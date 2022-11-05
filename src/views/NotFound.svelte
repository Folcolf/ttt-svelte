<script lang="ts">
  import { navigate } from 'svelte-navigator'
  import { Button } from 'sveltestrap'

  import Center from 'components/layout/Center.svelte'
</script>

<Center>
  <h1>404</h1>
  <p>Page not found</p>

  <p>
    <Button class="primary" on:click={() => navigate(-1)}>Go back</Button>
    <Button class="primary" on:click={() => navigate('/')}>Go to home</Button>
  </p>
</Center>
