import Login from './Login.svelte'
import Register from './Register.svelte'

const routes = [
  // Public routes
  {
    path: '/',
    component: Login,
    private: false,
  },
  {
    path: '/login',
    component: Login,
    private: false,
  },
  {
    path: '/register',
    component: Register,
    private: false,
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

]

export { routes }
