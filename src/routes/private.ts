import Game from 'views/Game.svelte'
import JoinGame from 'views/game/JoinGame.svelte'
import PlayGame from 'views/game/PlayGame.svelte'

import type { Route } from 'types/Route'

export default [
  {
    path: '/game',
    component: Game,
    meta: {
      title: 'Game',
      description: 'Game page',
      icon: 'play-circle',
      private: true,
    },
  },
  {
    path: '/game/:id/join',
    component: JoinGame,
    meta: {
      title: 'Join Game',
      description: 'Join game page',
      icon: 'play-circle',
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
      icon: 'play-circle',
      private: true,
      invisible: true,
    },
  },
] as Route[]
