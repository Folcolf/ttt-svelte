import Home from 'views/Home.svelte'
import Login from 'views/Login.svelte'
import Register from 'views/Register.svelte'

import type { Route } from 'types/Route'

export default [
  {
    path: '/',
    component: Home,
    meta: {
      title: 'Home',
      description: 'Home page',
      icon: 'house',
      private: false,
    },
  },
  {
    path: '/login',
    component: Login,
    meta: {
      title: 'Login',
      description: 'Login to your account',
      icon: 'box-arrow-in-right',
      private: false,
      loggedIn: false,
    },
  },
  {
    path: '/register',
    component: Register,
    meta: {
      title: 'Register',
      description: 'Register for an account',
      icon: 'box-arrow-in-right',
      private: false,
      loggedIn: false,
    },
  },
] as Route[]
