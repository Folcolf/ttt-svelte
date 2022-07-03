<script lang="ts">
  import { mdiBrightness4, mdiMenu } from '@mdi/js'
  import { AppBar, Button, Icon } from 'svelte-materialify/src'
  import { navigate } from 'svelte-navigator'
  import { theme } from '../../stores/theme'
  import NavMenu from './menu/NavMenu.svelte'

  let active = false

  const toggleTheme = () => theme.set($theme === 'light' ? 'dark' : 'light')
  const toggleNavigation = () => (active = !active)
</script>

<div>
  <AppBar dense class="primary-color">
    <div slot="icon">
      <Button fab depressed text on:click={toggleNavigation}>
        <Icon path={mdiMenu} class="white-text" />
      </Button>
    </div>
    <span
      slot="title"
      id="title"
      class="pointer"
      on:click={() => navigate('/')}
    >
      TicTacToe
    </span>
    <div style="flex-grow:1" />
    <div class="icon">
      <Button fab size="x-small" on:click={toggleTheme}>
        <Icon path={mdiBrightness4} size="20" />
      </Button>
    </div>
  </AppBar>
  <NavMenu on:navigation={toggleNavigation} bind:active />
</div>

<style lang="scss">
  .icon {
    margin-right: 10px !important;
  }

  #title {
    color: white !important;
    font-size: 1.5rem;
    font-weight: bold;
  }
</style>
