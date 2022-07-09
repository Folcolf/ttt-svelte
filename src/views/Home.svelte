<script lang="ts">
  import { Button, ProgressCircular } from 'svelte-materialify/src'
  import { Link, navigate } from 'svelte-navigator'

  import Card from 'src/components/card/Card.svelte'
  import Footer from 'src/components/footer/Footer.svelte'
  import Top from 'src/components/layout/Top.svelte'

  import { count } from 'src/services/game'
</script>

<Top>
  <span class="text-h3">Home</span>

  <div class="ma-10 text-center">
    <p>This site allows two people to play tictactoe online!</p>
    <p>
      If youd didn't know how to play go to <Link
        to="/help"
        class="success-text font-weight-bold">here</Link
      >
    </p>
    <p>
      You can retrieve the scores of your previous games in your profile page
    </p>
    <br />
    <p>You can also see the best in the leaderboard</p>
    <br />
    {#await count()}
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

<Footer />

<style lang="scss">
  p {
    margin: 0;
  }
</style>
