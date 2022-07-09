<script lang="ts">
  import { Button, Icon } from 'svelte-materialify/src'

  import type { Navigation } from 'src/interfaces/Navigation'
  import { navigate } from 'svelte-navigator'

  export let menuItems: Navigation[]

  const handleClick = (path: string) => {
    navigate(path)
  }
</script>

<div class="mt-2 mb-2">
  {#each menuItems as { path, name, icon }}
    <Button text rounded on:click={() => handleClick(path)}>
      {#if icon}
        <Icon path={icon} class="mr-2" />
      {/if}
      {name}
    </Button>
  {/each}
</div>
