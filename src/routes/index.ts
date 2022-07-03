import { mdiHome, mdiLogin } from '@mdi/js'
import type Route from 'src/interfaces/Route'
import Home from 'src/views/Home.svelte'
import Login from 'src/views/Login.svelte'
import Register from 'src/views/Register.svelte'

const routes = [
  // Public routes
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
  // Private routes
  // {
  //   path: '/dashboard',
  //   component: Dashboard,
  //   private: true,
  // },
  // {
  //   path: '/profile',
  //   component: Profile,
  //   private: true,
  // }
] as Route[]

export { routes }
