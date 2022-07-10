<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  import Cell from './Cell.svelte'

  export let board: string[]

  const dispatch = createEventDispatcher()

  const handleClick = (e: CustomEvent) => dispatch('click', e.detail)
</script>

<div class="row">
  {#each board as row, i}
    <Cell bind:id={row} idx={i} on:click={handleClick} />
  {/each}
</div>

<style lang="scss">
  .row {
    display: flex;
    flex-wrap: wrap;
  }
</style>
