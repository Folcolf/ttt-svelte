<script>
  import Top from 'src/components/layout/Top.svelte'

  let snackbar = false
  let snackbarType = 'info'
  let snackbarMessage = ''
</script>

<Top {snackbar} {snackbarType} {snackbarMessage}>
  <h2>Register</h2>
</Top>
