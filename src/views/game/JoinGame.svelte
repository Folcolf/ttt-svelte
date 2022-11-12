<script lang="ts">
  import { onDestroy } from 'svelte'
  import { useNavigate, useParams } from 'svelte-navigator'
  import { Button, CardBody, Container } from 'sveltestrap'

  import Card from 'components/card/Card.svelte'
  import Center from 'components/layout/Center.svelte'
  import { show } from 'stores/snackbar'
  import { user } from 'stores/auth'

  const params = useParams()
  const navigate = useNavigate()

  let ready = false

  const handlePlay = () => navigate(`/game/${$params.id}`)

  const handleInvite = () => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      show('success', 'Copied to clipboard')
      return navigator.clipboard.writeText(window.location.href)
    }
  }

  const sse = new WebSocket(`ws://localhost/ws/events/${$params.id}`)
  sse.onopen = () => {
    show('info', 'Waiting for opponent')
    sse.send($user)
  }

  sse.addEventListener('close', () => {
    ready = true
  })

  sse.onerror = (e) => {
    const { readyState } = e.target as EventSource

    if (readyState == EventSource.CLOSED) {
      show('danger', 'An error occurred while connecting to the server.')
      navigate(-1)
    }
  }

  onDestroy(() => {
    sse.close()
  })
</script>

<Center>
  <div class="d-flex text-center justify-center flex-row">
    <Card title="Invite your friends to join">
      <CardBody class="d-flex flex-column justify-center justify-space-around">
        <p>Create a game and invite your friends to join.</p>
        <Container>
          <Button class="info-color" on:click={handleInvite}>Invite</Button>
          <Button
            disabled={!ready}
            class={ready && 'primary-color'}
            on:click={handlePlay}
          >
            Play
          </Button>
        </Container>
      </CardBody>
    </Card>
  </div>
</Center>
