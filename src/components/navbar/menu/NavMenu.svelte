<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { navigate } from 'svelte-navigator'
  import { Button, Container, Icon, ListGroup, Offcanvas } from 'sveltestrap'

  import { routes } from 'src/routes'
  import { isLoggedIn, user } from 'stores/auth'
  import NavMenuItem from './NavMenuItem.svelte'

  export let active: boolean

  const dispatch = createEventDispatcher()

  const navigateTo = (e: CustomEvent) => {
    active = false
    navigate(e.detail.path)
  }

  const handleLogout = () => {
    user.set(null)
    active = false
    navigate('/login')
  }
</script>

<Offcanvas isOpen={active} toggle={() => dispatch('navigation')} header="Menu">
  <Container class="d-flex flex-column h-100">
    <ListGroup flush>
      {#each routes as route}
        {#if !route.meta.invisible}
          {#if $isLoggedIn}
            {#if route.meta.loggedIn !== false}
              <NavMenuItem {route} on:navigate={navigateTo} />
            {/if}
          {:else if route.meta.private !== true}
            <NavMenuItem {route} on:navigate={navigateTo} />
          {/if}
        {/if}
      {/each}
    </ListGroup>
    {#if $isLoggedIn}
      <Button
        class="pointer text-decoration-none mb-0 mt-auto"
        on:click={handleLogout}
      >
        <Icon name="box-arrow-in-left" />
        Logout
      </Button>
    {/if}
  </Container>
</Offcanvas>
