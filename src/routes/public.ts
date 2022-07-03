import { mdiHome, mdiLogin } from '@mdi/js'

import type Route from 'src/interfaces/Route'

import Home from 'src/views/Home.svelte'
import Login from 'src/views/Login.svelte'
import Register from 'src/views/Register.svelte'

export default [
  {
    path: '/',
    component: Home,
    meta: {
      title: 'Home',
      description: 'Home page',
      icon: mdiHome,
      private: false,
    },
  },
  {
    path: '/login',
    component: Login,
    meta: {
      title: 'Login',
      description: 'Login to your account',
      icon: mdiLogin,
      private: false,
    },
  },
  {
    path: '/register',
    component: Register,
    meta: {
      title: 'Register',
      description: 'Register for an account',
      icon: mdiLogin,
      private: false,
    },
  },
] as Route[]
