<script lang="ts">
  import { onMount, onDestroy } from 'svelte'
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

  onMount(() => {
    const body = document.querySelector('body')
    body && (body.style.paddingBottom = '100px')
  })

  onDestroy(() => {
    const body = document.querySelector('body')
    body && (body.style.paddingBottom = '0px')
  })
</script>

<footer
  class="footer fixed-bottom justify-content-center text-center flex-column bg-light pb-0"
>
  <ListButton {menuItems} />
  <div class="bg-primary p-2 text-white w-100">
    {year} - <b>TicTacToe</b>
  </div>
</footer>
