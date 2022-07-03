<script lang="ts">
  import { Button } from 'svelte-materialify/src'
  import { navigate } from 'svelte-navigator'
  import Center from '../components/layout/Center.svelte'
</script>

<Center>
  <h1>404</h1>
  <p>Page not found</p>

  <p>
    <Button class="primary-color" on:click={() => navigate(-1)}>Go back</Button>
    <Button class="primary-color" on:click={() => navigate('/')}>
      Go to home
    </Button>
  </p>
</Center>
