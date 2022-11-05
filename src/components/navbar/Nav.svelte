<script lang="ts">
  import { navigate } from 'svelte-navigator'
  import { Navbar, NavbarToggler } from 'sveltestrap'

  import NavMenu from './menu/NavMenu.svelte'

  let active = false

  const toggleNavigation = () => (active = !active)
</script>

<Navbar fixed={'top'} color={'primary'} container={false} class="p-2 gap-2">
  <NavbarToggler on:click={toggleNavigation} class="pointer" color="primary" />
  <span
    aria-label="title"
    class="pointer"
    on:click={() => navigate('/')}
    on:keydown={() => navigate('/')}
  >
    <div class="title">TicTacToe</div>
  </span>
  <div style="flex-grow:1" />
</Navbar>
<NavMenu on:navigation={toggleNavigation} bind:active />

<style scoped lang="scss">
  .title {
    color: white !important;
    font-size: 1.5rem;
    font-weight: bold;
  }
</style>
