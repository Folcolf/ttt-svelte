<script lang="ts">
  import { useParams } from 'svelte-navigator'

  import Board from 'src/components/game/Board.svelte'
  import Center from 'src/components/layout/Center.svelte'

  const params = useParams()

  const board = ['toto', null, null, null, null, null, null, null, null]

  const wss = new WebSocket(`/api/events/${$params.id}`)

  wss.onopen = () => {
    console.log('connected')
  }

  wss.onerror = () => {
    console.log('disconnected')
  }

  wss.onclose = () => {}

  const handleChoose = (e: CustomEvent) => {
    console.log(e.detail)
  }
</script>

<Center>
  <Board {board} on:click={handleChoose} />
</Center>
