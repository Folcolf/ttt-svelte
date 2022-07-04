<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import {
    Button,
    List,
    NavigationDrawer,
    Overlay,
  } from 'svelte-materialify/src'
  import { navigate } from 'svelte-navigator'

  import { logout } from 'services/auth'
  import { routes } from 'src/routes'
  import { isLoggedIn, user } from 'stores/auth'
  import { message, snackbar, type } from 'stores/snackbar'
  import NavMenuItem from './NavMenuItem.svelte'

  export let active

  const dispatch = createEventDispatcher()

  const navigateTo = (e: CustomEvent) => {
    active = false
    navigate(e.detail.path)
  }

  const handleLogout = () => {
    logout()
      .then(() => {
        user.set(null)
        active = false
        navigate('/login')
      })
      .catch(() => {
        snackbar.set(true)
        message.set('Logout failed')
        type.set('error')
      })
  }
</script>

<NavigationDrawer style="position: absolute" class="aside-modal" {active}>
  <List nav dense>
    {#each routes as route}
      {#if $isLoggedIn}
        {#if route.meta.title !== 'login' && route.meta.title !== 'register'}
          <NavMenuItem {route} on:navigate={navigateTo} />
        {/if}
      {:else if route.meta.private !== true}
        <NavMenuItem {route} on:navigate={navigateTo} />
      {/if}
    {/each}
  </List>
  <span slot="append" class="pa-2">
    {#if $isLoggedIn}
      <Button block on:click={handleLogout}>Logout</Button>
    {/if}
  </span>
</NavigationDrawer>
<Overlay {active} absolute on:click={() => dispatch('navigation')} index={1} />
