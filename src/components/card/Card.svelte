<script lang="ts">
  import { Card, CardText } from 'sveltestrap'

  export let title: string
  export let subtitle: string = undefined
</script>

<Card class="bg-light">
  <div class="pl-4 pr-4 pt-3 mb-3">
    <p id="title" class="text-center h4 mb-2">{title}</p>
    <div class="underline-title bg-primary" />
    {#if subtitle}
      <br />
      <span class="h6 mb-2">{subtitle}</span>
    {/if}
  </div>
  <CardText>
    <slot />
  </CardText>
</Card>

<style lang="scss">
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
