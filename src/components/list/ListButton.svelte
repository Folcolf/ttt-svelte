<script lang="ts">
  import { navigate } from 'svelte-navigator'
  import { Button, Icon } from 'sveltestrap'

  import type { Navigation } from 'types/Navigation'

  export let menuItems: Navigation[]

  const handleClick = (path: string) => navigate(path)
</script>

<div class="mb-2">
  {#each menuItems as { path, name, icon }}
    <Button
      on:click={() => handleClick(path)}
      class="m-2 pointer text-decoration-none"
      size={'sm'}
      color={'link'}
    >
      {#if icon}
        <Icon name={icon} />
      {/if}
      {name}
    </Button>
  {/each}
</div>
