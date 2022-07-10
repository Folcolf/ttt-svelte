<script lang="ts">
  import { onDestroy } from 'svelte'
  import { useNavigate, useParams } from 'svelte-navigator'
  import { Button, CardBody, Container } from 'sveltestrap'

  import Card from 'components/card/Card.svelte'
  import Center from 'components/layout/Center.svelte'
  import { show } from 'stores/snackbar'

  const params = useParams()
  const navigate = useNavigate()

  let ready = false

  const handlePlay = () => navigate('/game/' + $params.id + '/play')

  const handleInvite = () => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      show('success', 'Copied to clipboard')
      return navigator.clipboard.writeText(window.location.href)
    }
  }

  const sse = new EventSource(`/api/events/${$params.id}`)
  sse.onopen = () => {
    show('info', 'Waiting for opponent')
  }

  sse.addEventListener('close', () => {
    ready = true
  })

  sse.onerror = (e) => {
    const { readyState } = e.target as EventSource

    if (readyState == EventSource.CLOSED) {
      show('danger', 'An error occurred while connecting to the server.')
    }
  }

  onDestroy(() => {
    sse.close()
  })
</script>

<Center>
  <Container class="text-center d-flex justify-center flex-row">
    <Card title="Invite your friends to join">
      <p>Create a game and invite your friends to join.</p>
      <CardBody class="d-flex justify-center justify-space-around">
        <Button class="info-color" on:click={handleInvite}>Invite</Button>
        <Button
          disabled={!ready}
          class={ready && 'primary-color'}
          on:click={handlePlay}
        >
          Play
        </Button>
      </CardBody>
    </Card>
  </Container>
</Center>
