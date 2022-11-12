<script lang="ts">
  import { navigate } from 'svelte-navigator'
  import { Button, CardBody } from 'sveltestrap'

  import Card from 'components/card/Card.svelte'
  import EmailField from 'components/field/EmailField.svelte'
  import PasswordField from 'components/field/PasswordField.svelte'
  import Center from 'components/layout/Center.svelte'

  import { login } from 'services/auth'
  import { user } from 'stores/auth'
  import { show } from 'stores/snackbar'

  import type { Page } from 'types/model/Page'

  $: email = ''
  $: password = ''
  $: error = null
  $: invalid = email === '' || password === '' || error !== null

  const handleEnter = (e: KeyboardEvent) => {
    if (e.code === 'Enter' && !invalid) {
      log()
    }
  }

  const log = () => {
    login(email, password)
      .then((page: Page<string>) => {
        show('info', 'Your logged in')
        user.set(page.data)
        setTimeout(() => navigate('/'), 1000)
      })
      .catch((e: Error) => show('danger', e.message))
  }
</script>

<svelte:window on:keyup={(e) => !invalid && handleEnter(e)} />

<Center>
  <Card title="LOGIN">
    <CardBody>
      <div class="d-flex gap-3 flex-column">
        <EmailField bind:email bind:error />
        <PasswordField
          bind:password
          bind:error
          forgotPassword={true}
          forgotRedirect={'password-reset'}
        />
      </div>
      <CardBody class="d-flex justify-content-center">
        <Button disabled={invalid} on:click={log}>Login</Button>
      </CardBody>
      <div class="d-flex justify-content-center">
        <Button
          color="link"
          class="text-center text-decoration-none pointer"
          on:click={() => navigate('/register')}
        >
          Don't have account yet?
        </Button>
      </div>
    </CardBody>
  </Card>
</Center>
