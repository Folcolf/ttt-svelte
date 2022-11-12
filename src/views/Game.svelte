<script lang="ts">
  import { useLocation, useNavigate } from 'svelte-navigator'
  import { Button, CardBody, Col, Row } from 'sveltestrap'

  import Card from 'components/card/Card.svelte'
  import TextField from 'components/field/TextField.svelte'
  import Center from 'components/layout/Center.svelte'

  import { create } from 'services/game'
  import { getUser } from 'stores/auth'
  import { show } from 'stores/snackbar'

  const navigate = useNavigate()
  const location = useLocation()

  $: value = ''
  $: error = null
  $: invalid = value === '' || error !== null

  const handleJoined = () => {
    if (!invalid) {
      navigate(`${$location.pathname}/${value}/join`)
    }
  }

  const handleCreate = () => {
    create({ userId: getUser() })
      .then(({ data }) => navigate(`${$location.pathname}/${data.id}/join`))
      .catch((e: Error) => show('danger', e.message))
  }
</script>

<Center>
  <Row noGutters class="text-center align-items-center h-inherit gap-2">
    <Col md={5}>
      <Card title="Create a game">
        <CardBody class="d-flex justify-content-center flex-column">
          <p>Create a game and invite your friends to join.</p>
          <Button class="text-center" on:click={handleCreate}>Create</Button>
        </CardBody>
      </Card>
    </Col>
    <Col md={{ size: 5, offset: 1 }}>
      <Card title="Joined a game">
        <CardBody class="d-flex justify-content-center gap-3 flex-column">
          <p>Join a game and wait for your friend to join.</p>
          <TextField bind:value bind:error label="Game id" />
          <Button disabled={invalid} on:click={handleJoined}>Joined</Button>
        </CardBody>
      </Card>
    </Col>
  </Row>
</Center>
