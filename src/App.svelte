<script lang="ts">
  import { MaterialApp } from 'svelte-materialify/src'
  import { Route, Router } from 'svelte-navigator'

  import PrivateRoute from 'components/route/private/PrivateRoute.svelte'
  import { routes } from './routes/index'
  import { theme } from './stores/theme'
  import NotFound from './views/NotFound.svelte'

  import Nav from './components/navbar/Nav.svelte'
  import './styles/global.scss'
</script>

<MaterialApp theme={$theme}>
  <Router>
    <Nav />
    {#each routes as { path, component, meta }}
      {#if meta.private !== true}
        <Route {path} {component} let:params let:location />
      {:else}
        <PrivateRoute {path} {component} let:params let:location />
      {/if}
    {/each}
    <Route path="*" component={NotFound} />
  </Router>
</MaterialApp>
