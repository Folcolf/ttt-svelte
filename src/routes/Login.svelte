<script lang="ts">
  import { Button, CardActions, CardText } from 'svelte-materialify/src'
  import { Link, navigate } from 'svelte-navigator'

  import Card from 'components/card/Card.svelte'
  import Top from 'components/layout/Top.svelte'
  import { login } from 'services/auth'
  import EmailField from 'src/components/field/EmailField.svelte'
  import PasswordField from 'src/components/field/PasswordField.svelte'

  $: email = ''
  $: password = ''
  $: error = null

  $: invalid = email === '' || password === '' || error === null

  let snackbar = false
  let snackbarType = 'info'
  let snackbarMessage = ''

  const handleEnter = (e: KeyboardEvent) => {
    if (e.code === 'Enter' && !invalid) {
      log()
    }
  }

  const log = () => {
    login(email, password)
      .then(() => {
        snackbarMessage = 'Your logged in'
        snackbarType = 'info'
        snackbar = true
        setTimeout(() => navigate('/'), 1000)
      })
      .catch((e: Error) => {
        snackbar = true
        snackbarType = 'error'
        snackbarMessage = e.message
      })
  }
</script>

<svelte:window on:keyup={(e) => !invalid && handleEnter(e)} />

<Top bind:snackbar {snackbarMessage} {snackbarType}>
  <Card title="LOGIN">
    <CardText>
      <div class="d-flex justify-space-between flex-column">
        <EmailField bind:email bind:error />
        <PasswordField
          bind:password
          bind:error
          forgotPassword={true}
          forgotRedirect={'password-reset'}
        />
        <CardActions class="d-flex justify-center">
          <Button on:click={log} disabled={invalid}>Login</Button>
        </CardActions>
        <CardActions class="d-flex justify-center">
          <Link class="text-center text-decoration-none pointer" to="register">
            Don't have account yet?
          </Link>
        </CardActions>
      </div>
    </CardText>
  </Card>
</Top>
