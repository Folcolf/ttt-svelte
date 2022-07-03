<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { Icon, ListItem } from 'svelte-materialify/src'

  import type Route from 'src/interfaces/Route'
  import { useLocation } from 'svelte-navigator'

  export let route: Route

  const dispatch = createEventDispatcher()
  const location = useLocation()
  $: isActive = () => {
    return $location.pathname === route.path
  }

  const onClick = () => {
    dispatch('navigate', { path: route.path })
  }
</script>

<ListItem
  class="pointer text-decoration-none"
  on:click={onClick}
  active={isActive()}
>
  <span slot="prepend">
    <Icon path={route.meta.icon} />
  </span>
  {route.meta.title}
</ListItem>
