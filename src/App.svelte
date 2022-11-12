<script lang="ts">
  import { Route, Router } from 'svelte-navigator'
  import { Alert } from 'sveltestrap'

  import Nav from 'components/navbar/Nav.svelte'
  import PrivateRoute from 'components/route/private/PrivateRoute.svelte'
  import NotFound from 'views/NotFound.svelte'

  import { routes } from 'src/routes/index'
  import { message, snackbar, type } from 'stores/snackbar'

  import './scss/global.scss'

  $: $snackbar && setTimeout(() => snackbar.set(false), 2000)
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
  />
</svelte:head>

<Router>
  <Nav />
  {#each routes as { path, component, meta }}
    {#if meta.private !== true}
      <Route {path} {component} />
    {:else}
      <PrivateRoute {path}>
        <svelte:component this={component} />
      </PrivateRoute>
    {/if}
  {/each}
  <Route path="*" component={NotFound} />
</Router>

{#if $snackbar}
  <Alert class="flex-column navbar fixed-bottom" color={$type} fade>
    {$message}
  </Alert>
{/if}
