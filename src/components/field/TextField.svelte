<script>
  import { Input } from 'sveltestrap'

  export let value
  export let label
  export let error

  let invalid = false
  let feedback = ''

  const requiredRules = () => {
    if (!value) feedback = 'Required'
    else feedback = ''
    invalid = !!feedback
    error = invalid ? feedback : null
  }
</script>

<Input
  type="text"
  {label}
  placeholder={label}
  {feedback}
  bind:value
  bind:invalid
  on:blur={requiredRules}
>
  Name
</Input>
