<script lang="ts">
  import { Link, navigate } from 'svelte-navigator'
  import { Button, CardBody, Container, Spinner } from 'sveltestrap'

  import Card from 'components/card/Card.svelte'
  import Footer from 'components/footer/Footer.svelte'
  import Top from 'components/layout/Top.svelte'

  import { count } from 'services/game'
</script>

<Top>
  <span class="h3">Home</span>

  <div class="m-10 text-center">
    <Container>
      <p>This site allows two people to play tictactoe online!</p>
      <p>
        If youd didn't know how to play go to <Link
          to="/help"
          class="text-info font-weight-bold">here</Link
        >
      </p>
      <p>
        You can retrieve the scores of your previous games in your profile page
      </p>
      <br />
      <p>You can also see the best in the leaderboard</p>
      <br />
    </Container>
    <Card title="Games">
      <CardBody>
        {#await count()}
          <Spinner color={'primary'} size={'lg'} />
        {:then value}
          {#if value}
            <p>You have played {value.data} games</p>
          {:else}
            <p>Be the first to play!</p>
          {/if}
        {:catch error}
          <h3 class="mb-5">Error</h3>
          <p>{error}</p>
        {/await}
      </CardBody>
    </Card>

    <p class="mt-5">
      <Button class="primary" on:click={() => navigate('/game')}>Play</Button>
    </p>
  </div>
</Top>

<Footer />

<style lang="scss">
  p {
    margin: 0;
  }
</style>
