<script>
  import { TextField } from 'svelte-materialify/src'

  export let email
  export let error

  const emailRules = [
    (v) => !!v || 'Required',
    (v) => v.length <= 25 || 'Max 25 characters',
  ]
</script>

<TextField
  bind:value={email}
  bind:error
  validateOnBlur
  class="pb-5"
  rules={emailRules}
>
  Email
</TextField>
