<script lang="ts">
  import { navigate } from 'svelte-navigator'
  import { Button, CardBody } from 'sveltestrap'

  import Card from 'components/card/Card.svelte'
  import EmailField from 'components/field/EmailField.svelte'
  import PasswordField from 'components/field/PasswordField.svelte'
  import TextField from 'components/field/TextField.svelte'
  import Center from 'components/layout/Center.svelte'

  import { register } from 'services/auth'
  import { show } from 'stores/snackbar'

  $: email = ''
  $: name = ''
  $: password = ''
  $: error = null
  $: invalid = email === '' || password === '' || name === '' || error !== null

  const handleEnter = (e: KeyboardEvent) => {
    if (e.code === 'Enter' && !invalid) {
      handleSubmit()
    }
  }

  const handleSubmit = () => {
    register(email, name, password)
      .then(() => {
        show('info', 'Your registered')
        setTimeout(() => navigate('/login'), 1000)
      })
      .catch((e: Error) => show('danger', e.message))
  }
</script>

<svelte:window on:keyup={(e) => !invalid && handleEnter(e)} />

<Center>
  <Card title="REGISTER">
    <CardBody>
      <div class="d-flex gap-3 flex-column">
        <EmailField bind:email bind:error />
        <TextField label="Name" bind:value={name} bind:error />
        <PasswordField bind:password bind:error />
      </div>
      <CardBody class="d-flex justify-content-center">
        <Button on:click={handleSubmit} disabled={invalid}>Register</Button>
      </CardBody>
      <div class="d-flex justify-content-center">
        <Button
          color="link"
          class="text-center text-decoration-none pointer"
          on:click={() => navigate('/login')}
        >
          You already have an account?
        </Button>
      </div>
    </CardBody>
  </Card>
</Center>
