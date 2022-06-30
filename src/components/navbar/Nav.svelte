<script lang="ts">
  import { mdiBrightness4, mdiMenu } from '@mdi/js'
  import {
    AppBar,
    Button,
    Icon,
    NavigationDrawer,
    Overlay,
  } from 'svelte-materialify/src'
  import { theme } from '../../stores/theme'

  let active = false

  const toggleTheme = () => theme.set($theme === 'light' ? 'dark' : 'light')
  const toggleNavigation = () => (active = !active)
</script>

<div style="height:100%">
  <AppBar dense class='primary-color'>
    <div slot="icon">
      <Button fab depressed text on:click={toggleNavigation}>
        <Icon path={mdiMenu} class="white-text" />
      </Button>
    </div>
    <span slot="title" class="white-text">TicTacToe</span>
    <div style="flex-grow:1" />
    <div class="icon">
      <Button fab size="x-small" on:click={toggleTheme}>
        <Icon path={mdiBrightness4} size="20" />
      </Button>
    </div>
  </AppBar>

  <NavigationDrawer style="position: absolute" class="aside-modal" {active}>
    Content
  </NavigationDrawer>
  <Overlay {active} absolute on:click={toggleNavigation} index={1} />
</div>

<style lang="scss">
  .icon {
    margin-right: 10px !important;
  }
</style>
