import { writable } from 'svelte/store'

import type { User } from 'src/types/model/User'
import { isLogged } from 'src/services/auth'
import storage from './index'

const user = storage<User>('user', null)
const isLoggedIn = writable(false)

user.subscribe((data) => {
  isLoggedIn.set(!!data)
})

const check = () => {
  isLogged().then((page) => {
    user.set(page.data)
  })
}

export { user, isLoggedIn, check }
