<script>
  import { Input, InputGroup } from 'sveltestrap'

  export let email
  export let error

  let invalid = false
  let feedback = ''

  const requiredRules = () => {
    if (!email) {
      feedback = 'Required'
    } else if (email.length > 25) {
      feedback = 'Max 25 characters'
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      feedback = 'Invalid email address'
    } else {
      feedback = ''
    }
    invalid = !!feedback
    error = invalid ? feedback : null
  }
</script>

<InputGroup>
  <Input
    type="email"
    name="email"
    label="email"
    placeholder="Email"
    {feedback}
    bind:value={email}
    bind:invalid
    on:blur={requiredRules}
  >
    Email
  </Input>
</InputGroup>
