<script lang="ts">
  import { useParams } from 'svelte-navigator'

  import Board from 'src/components/game/Board.svelte'
  import Center from 'src/components/layout/Center.svelte'
  import { user } from 'stores/auth'

  const params = useParams()

  const board = [
    '636280a9c36f207e2b336190',
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]

  const wss = new WebSocket(`ws://localhost/ws/events/${$params.id}`)

  wss.onopen = () => {
    wss.send($user)
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
