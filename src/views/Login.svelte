<script lang="ts">
  import { Button, CardActions, CardText } from 'svelte-materialify/src'
  import { Link, navigate } from 'svelte-navigator'

  import Card from 'components/card/Card.svelte'
  import EmailField from 'components/field/EmailField.svelte'
  import PasswordField from 'components/field/PasswordField.svelte'
  import { login } from 'services/auth'
  import type { Page } from 'src/interfaces/model/Page'
  import type { User } from 'src/interfaces/model/User'
  import { user } from 'src/stores/auth'
  import { message, snackbar, type } from 'src/stores/snackbar'

  $: email = ''
  $: password = ''
  $: error = null

  $: invalid = email === '' || password === '' || error === null

  const handleEnter = (e: KeyboardEvent) => {
    if (e.code === 'Enter' && !invalid) {
      log()
    }
  }

  const log = () => {
    login(email, password)
      .then((page: Page<User>) => {
        message.set('Your logged in')
        type.set('info')
        snackbar.set(true)
        user.set(page.data)
        setTimeout(() => navigate('/'), 1000)
      })
      .catch((e: Error) => {
        message.set(e.message)
        type.set('error')
        snackbar.set(true)
      })
  }
</script>

<svelte:window on:keyup={(e) => !invalid && handleEnter(e)} />

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
