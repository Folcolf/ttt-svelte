import { writable } from 'svelte/store'
import storage from './index'

const user = storage('user', null)
const isLoggedIn = writable(false)

user.subscribe((user) => {
  isLoggedIn.set(!!user)
})

export { user, isLoggedIn }
