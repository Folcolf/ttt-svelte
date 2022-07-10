<script lang="ts">
  import { MaterialApp, Snackbar } from 'svelte-materialify/src'
  import { Route, Router } from 'svelte-navigator'

  import Nav from 'components/navbar/Nav.svelte'
  import PrivateRoute from 'components/route/private/PrivateRoute.svelte'
  import NotFound from 'src/views/NotFound.svelte'

  import { routes } from 'src/routes/index'
  import { message, snackbar, type } from 'stores/snackbar'
  import { theme } from 'stores/theme'

  import './styles/global.scss'

  const getClass = (type) => {
    switch (type) {
      case 'info':
        return 'primary-color'
      case 'success':
        return 'success-color'
      case 'error':
        return 'error-color'
      default:
        return 'primary-color'
    }
  }
</script>

<MaterialApp theme={$theme}>
  <Router>
    <Nav />
    {#each routes as { path, component, meta }}
      {#if meta.private !== true}
        <Route {path} {component} let:params let:location />
      {:else}
        <PrivateRoute {path} let:params let:location>
          <svelte:component this={component} {params} {location} />
        </PrivateRoute>
      {/if}
    {/each}
    <Route path="*" component={NotFound} />
  </Router>

  {#if $snackbar}
    <Snackbar
      class={getClass($type) + ' flex-column'}
      bottom
      center
      timeout={2000}
      bind:active={$snackbar}
    >
      {$message}
    </Snackbar>
  {/if}
</MaterialApp>
