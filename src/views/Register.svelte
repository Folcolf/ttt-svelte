<script lang="ts">
  import { Button, CardActions, CardText } from 'svelte-materialify/src'
  import { Link, navigate } from 'svelte-navigator'

  import Card from 'components/card/Card.svelte'
  import EmailField from 'components/field/EmailField.svelte'
  import PasswordField from 'components/field/PasswordField.svelte'
  import TextField from 'components/field/TextField.svelte'
  import Center from 'components/layout/Center.svelte'
  import type { Page } from 'src/types/model/Page'
  import type { User } from 'src/types/model/User'
  import { register } from 'services/auth'
  import { user } from 'stores/auth'
  import { message, snackbar, type } from 'stores/snackbar'

  $: email = ''
  $: name = ''
  $: password = ''
  $: error = null

  $: invalid = email === '' || password === '' || name === '' || error === null

  const handleEnter = (e: KeyboardEvent) => {
    if (e.code === 'Enter' && !invalid) {
      handleSubmit()
    }
  }

  const handleSubmit = () => {
    register(email, name, password)
      .then((page: Page<User>) => {
        message.set('Your registered')
        type.set('info')
        snackbar.set(true)
        user.set(page.data)
        setTimeout(() => navigate('/login'), 1000)
      })
      .catch((e: Error) => {
        message.set(e.message)
        type.set('error')
        snackbar.set(true)
      })
  }
</script>

<svelte:window on:keyup={(e) => !invalid && handleEnter(e)} />

<Center>
  <Card title="REGISTER">
    <CardText>
      <div class="d-flex justify-space-between flex-column">
        <EmailField bind:email bind:error />
        <TextField bind:value={name} bind:error />
        <PasswordField bind:password bind:error />
        <CardActions class="d-flex justify-center">
          <Button on:click={handleSubmit} disabled={invalid}>Register</Button>
        </CardActions>
        <CardActions class="d-flex justify-center">
          <Link class="text-center text-decoration-none pointer" to="/login">
            You already have an account?
          </Link>
        </CardActions>
      </div>
    </CardText>
  </Card>
</Center>
