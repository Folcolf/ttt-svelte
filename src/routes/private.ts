import { mdiPlay } from '@mdi/js'
import type Route from 'src/types/Route'
import Game from 'src/views/Game.svelte'
import JoinGame from 'src/views/game/JoinGame.svelte'
import PlayGame from 'src/views/game/PlayGame.svelte'

export default [
  {
    path: '/game',
    component: Game,
    meta: {
      title: 'Game',
      description: 'Game page',
      icon: mdiPlay,
      private: true,
    },
  },
  {
    path: '/game/:id/join',
    component: JoinGame,
    meta: {
      title: 'Join Game',
      description: 'Join game page',
      icon: mdiPlay,
      private: true,
      invisible: true,
    },
  },
  {
    path: '/game/:id/play',
    component: PlayGame,
    meta: {
      title: 'Play Game',
      description: 'Play game page',
      icon: mdiPlay,
      private: true,
      invisible: true,
    },
  },
] as Route[]
