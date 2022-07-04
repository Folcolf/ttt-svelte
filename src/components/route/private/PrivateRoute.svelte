<script lang="ts">
  import { Route } from 'svelte-navigator'

  import PrivateRouteGuard from './PrivateRouteGuard.svelte'

  export let path
  export let component
</script>

<Route {path} {component} let:params let:location let:navigate>
  <PrivateRouteGuard>
    <slot {params} {location} {navigate} />
  </PrivateRouteGuard>
</Route>
