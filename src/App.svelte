<script lang="ts">
  import { MaterialApp } from 'svelte-materialify/src'
  import { Route, Router } from 'svelte-navigator'

  import { routes } from './routes/index'
  import NotFound from './routes/NotFound.svelte'
  import { theme } from './stores/theme'

  import './styles/global.scss'
</script>

<MaterialApp theme={$theme}>
  <Router>
    {#each routes as route}
      <Route path={route.path} component={route.component} />
    {/each}
    <Route path="*" component={NotFound} />
  </Router>
</MaterialApp>

<style global lang="scss">
</style>
