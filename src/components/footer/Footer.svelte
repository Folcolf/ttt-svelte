<script lang="ts">
  import type { Navigation } from 'types/Navigation'
  import ListButton from '../list/ListButton.svelte'

  const menuItems = [
    {
      path: '/',
      name: 'Home',
      icon: 'house',
    },
    {
      path: '/help',
      name: 'Help',
      icon: 'info-circle',
    },
    {
      path: '/contact',
      name: 'Contact',
      icon: 'person-lines-fill',
    },
  ] as Navigation[]

  const year = new Date().getFullYear()
</script>

<footer
  class="navbar fixed-bottom justify-content-center flex-column bg-light pb-0"
>
  <ListButton {menuItems} />
  <div class="bg-primary p-2 text-center text-white w-100">
    {year} - <b>TicTacToe</b>
  </div>
</footer>
