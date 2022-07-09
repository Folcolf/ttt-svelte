<script lang="ts">
  import { Button, ProgressCircular } from 'svelte-materialify/src'
  import { navigate } from 'svelte-navigator'

  import Card from 'src/components/card/Card.svelte'
  import Top from 'src/components/layout/Top.svelte'

  import { count } from 'src/services/game'

  const promise = count()
</script>

<Top>
  <span class="text-h3">Home</span>

  <div class="ma-10 text-center">
    <p>This site allows two people to play tictactoe online!</p>
    <p>You can retrieve the scores of your previous games</p>
    <br />

    {#await promise}
      <ProgressCircular indeterminate color="primary" />
    {:then value}
      <Card title="Games">
        {#await value.json()}
          <ProgressCircular indeterminate color="primary" />
        {:then value}
          {#if value === {}}
            <p>You have played {value} games</p>
          {:else}
            <p>Be the first to play!</p>
          {/if}
        {:catch error}
          <p>Error: {error}</p>
        {/await}
      </Card>
    {:catch error}
      <Card title="Games">
        <h3 class="mb-5">Error</h3>
        <p>{error}</p>
      </Card>
    {/await}

    <p class="mt-5">
      <Button class="primary-color" on:click={() => navigate('/game')}>
        Play
      </Button>
    </p>
  </div>
</Top>
