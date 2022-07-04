<script>
  import { TextField } from 'svelte-materialify/src'
  export let value
  export let error

  const requiredRules = [(v) => !!v || 'Required']
</script>

<TextField
  bind:value
  bind:error
  validateOnBlur
  class="pb-5"
  rules={requiredRules}
>
  Name
</TextField>
