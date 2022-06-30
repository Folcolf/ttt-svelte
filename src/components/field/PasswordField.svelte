<script>
  import { mdiEye, mdiEyeOff } from '@mdi/js'
  import { CardActions, Icon, TextField } from 'svelte-materialify/src'
  import { navigate } from 'svelte-navigator'

  export let password
  export let error
  export let forgotPassword = false
  export let forgotRedirect = ''

  let show = false

  const requiredRules = [(v) => !!v || 'Required']
</script>

<div>
  <TextField
    type={show ? 'text' : 'password'}
    rules={requiredRules}
    validateOnBlur
    bind:value={password}
    bind:error
  >
    Password
    <div
      slot="append"
      on:click={() => {
        show = !show
      }}
    >
      <Icon path={show ? mdiEyeOff : mdiEye} />
    </div>
  </TextField>
  {#if forgotPassword}
    <CardActions class="d-flex justify-end">
      <span
        class="text-center text-decoration-none forgot pointer"
        on:click={() => navigate(forgotRedirect)}
      >
        Forgot password?
      </span>
    </CardActions>
  {/if}
</div>

<style lang="scss">
  $distance: -0.5rem;

  .forgot {
    margin-top: $distance;
    margin-right: $distance;
  }
</style>
