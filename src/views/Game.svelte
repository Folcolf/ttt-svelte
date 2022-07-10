<script>
  import { Button, CardActions, Col, Row } from 'svelte-materialify/src'
  import { useLocation, useNavigate } from 'svelte-navigator'

  import Card from 'components/card/Card.svelte'
  import TextField from 'components/field/TextField.svelte'
  import Center from 'components/layout/Center.svelte'
  import { create } from 'services/game'

  import { user } from 'src/stores/auth'

  const navigate = useNavigate()
  const location = useLocation()

  $: value = ''
  $: error = null
  $: invalid = value === '' || error === null

  const handleJoined = () => {
    if (!invalid) {
      navigate($location.pathname + '/' + value + '/join')
    }
  }

  const handleCreate = () => {
    create({ userId: $user.id }).then(({ data }) =>
      navigate($location.pathname + '/' + data.id + '/join')
    )
  }
</script>

<Center>
  <Row noGutters style="flex:0" class="text-center">
    <Col md={5}>
      <Card title="Create a game">
        <p>Create a game and invite your friends to join.</p>
        <CardActions class="d-flex justify-center">
          <Button on:click={handleCreate}>Create</Button>
        </CardActions>
      </Card>
    </Col>
    <Col md={5} offset={2}>
      <Card title="Joined a game">
        <p>Join a game and wait for your friend to join.</p>
        <CardActions class="d-flex justify-center flex-column">
          <TextField bind:value bind:error />
          <Button on:click={handleJoined}>Joined</Button>
        </CardActions>
      </Card>
    </Col>
  </Row>
</Center>
