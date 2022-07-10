<script lang="ts">
  import { mdiCheckboxBlankCircleOutline, mdiClose } from '@mdi/js'
  import { createEventDispatcher } from 'svelte'
  import { Icon } from 'svelte-materialify/src'

  import { user } from 'src/stores/auth'

  export let id: string
  export let idx: number

  const dispatch = createEventDispatcher()

  const handleClick = () => {
    dispatch('click', idx)
  }
</script>

<div class="cell">
  {#if $user.id === id}
    <Icon path={mdiClose} size="5vw" class="success-text" />
  {:else if id === null}
    <div class="inside" on:click={handleClick} />
  {:else}
    <Icon
      path={mdiCheckboxBlankCircleOutline}
      size="5vw"
      class="warning-text"
    />
  {/if}
</div>

<style lang="scss">
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
