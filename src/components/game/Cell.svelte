<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { Button, Icon } from 'sveltestrap'

  import { getUser } from 'src/stores/auth'

  export let id: string
  export let idx: number

  const dispatch = createEventDispatcher()

  const handleClick = () => dispatch('click', idx)
</script>

<div class="cell">
  {#if getUser() === id}
    <Icon name="x-lg" class="success-text" />
  {:else if id === null}
    <Button class="inside" on:click={handleClick} color="link" />
  {:else}
    <Icon name="circle" class="warning-text" />
  {/if}
</div>

<style scoped lang="scss">
  .cell {
    flex: 0 0 31.333333%;
    width: 5vw;
    height: 20vh;
    background: rgb(226, 226, 226);

    margin: 1%;

    display: flex;
    align-items: center;
    justify-content: center;

    .inside {
      width: 100%;
      height: 100%;
    }

    :hover {
      background: rgb(194, 194, 194);
      cursor: pointer;
    }
  }
</style>
