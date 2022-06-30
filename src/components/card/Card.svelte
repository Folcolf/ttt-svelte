<script lang="ts">
  import { Card, CardText } from 'svelte-materialify/src'

  export let title
  export let subtitle = undefined
</script>

<Card outlined>
  <div class="pl-4 pr-4 pt-3 mb-5">
    <p id="title" class="text-center text-h4 mb-2">{title}</p>
    <div class="underline-title primary-color" />
    {#if subtitle !== undefined}
      <br />
      <span class="text-h6 mb-2">{subtitle}</span>
    {/if}
  </div>
  <CardText>
    <slot />
  </CardText>
</Card>

<style lang="scss">
  @import 'svelte-materialify/src/styles/tools/colors';

  #title {
    font-family: 'Raleway Thin', sans-serif;
    letter-spacing: 4px;
    padding-bottom: 23px;
    padding-top: 13px;
    text-align: center;
  }

  .underline-title {
    height: 2px;
    margin: -1.1rem auto 0 auto;
    width: 89px;
  }
</style>
