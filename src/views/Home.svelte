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
      If youd didn't know how to play go to
      <Link to="/help" class="success-text font-weight-bold">here</Link>
    </p>
    <p>
      You can retrieve the scores of your previous games in your profile page
    </p>
    <br />
    <p>You can also see the best in the leaderboard</p>
    <br />
    {#await count()}
      <ProgressCircular indeterminate color="primary" />
    {:then { data }}
      <Card title="Games">
        {#if data !== 0}
          <p>There is {data} game {data > 1 ? 's' : ''}</p>
        {:else}
          <p>Be the first to play!</p>
        {/if}
      </Card>
    {:catch error}
      <Card title="Games">
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
