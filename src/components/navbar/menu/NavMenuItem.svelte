<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { useLocation } from 'svelte-navigator'
  import { Button, Icon, ListGroupItem } from 'sveltestrap'

  import type { Route } from 'types/Route'

  export let route: Route

  const dispatch = createEventDispatcher()
  const location = useLocation()
  $: active = $location.pathname === route.path

  const onClick = () => dispatch('navigate', { path: route.path })
</script>

<Button
  class="pointer text-decoration-none"
  on:click={onClick}
  {active}
  color={'link'}
>
  <ListGroupItem class="bg-light">
    <Icon name={route.meta.icon} />
    {route.meta.title}
  </ListGroupItem>
</Button>
