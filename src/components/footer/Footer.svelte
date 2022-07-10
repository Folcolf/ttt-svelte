<script lang="ts">
  import { Footer } from 'svelte-materialify/src'

  import { mdiHelp, mdiHome, mdiPhone } from '@mdi/js'
  import type { Navigation } from 'src/types/Navigation'
  import FooterMenu from './FooterMenu.svelte'

  export let menuItems = [
    {
      path: '/',
      name: 'Home',
      icon: mdiHome,
    },
    {
      path: '/help',
      name: 'Help',
      icon: mdiHelp,
    },
    {
      path: '/contact',
      name: 'Contact',
      icon: mdiPhone,
    },
  ] as Navigation[]

  const year = new Date().getFullYear()
</script>

<Footer padless class="secondary-color justify-center flex-column">
  <FooterMenu {menuItems} />
  <div class="primary-color pa-2 text-center" style="width:100%">
    {year} - <b>TicTacToe</b>
  </div>
</Footer>
