<script>
  import { Button } from 'svelte-materialify/src'
  import { navigate } from 'svelte-navigator'
  import Empty from './../components/layout/Empty.svelte'
</script>

<Empty>
  <h1>404</h1>
  <p>Page not found</p>

  <p>
    <Button class="primary-color" on:click={() => navigate(-1)}>Go back</Button>
    <Button class="primary-color" on:click={() => navigate('/')}>
      Go to home
    </Button>
  </p>
</Empty>
