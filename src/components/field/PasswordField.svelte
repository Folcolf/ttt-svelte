<script>
  import { navigate } from 'svelte-navigator'
  import { Button, Icon, Input, InputGroup, InputGroupText } from 'sveltestrap'

  export let password
  export let forgotPassword = false
  export let forgotRedirect = ''
  export let error

  let invalid = false
  let show = false
  let feedback = ''

  const requiredRules = () => {
    if (!password) {
      feedback = 'Required'
    } else {
      feedback = ''
    }
    invalid = !!feedback
    error = invalid ? feedback : null
  }
</script>

<InputGroup>
  <InputGroupText>
    <Button
      on:click={() => (show = !show)}
      color="link"
      class="p-0"
      tabindex={3}
    >
      <Icon name={show ? 'eye-fill' : 'eye-slash-fill'} />
    </Button>
  </InputGroupText>
  <Input
    type={show ? 'text' : 'password'}
    name="password"
    label="password"
    placeholder="Password"
    bind:value={password}
    bind:invalid
    {feedback}
    tabindex={2}
    on:blur={requiredRules}
  >
    Password
  </Input>
</InputGroup>
{#if forgotPassword}
  <div class="d-flex justify-end">
    <Button
      color="link"
      class="text-center text-decoration-none pointer"
      on:click={() => navigate(forgotRedirect)}
    >
      Forgot password?
    </Button>
  </div>
{/if}
