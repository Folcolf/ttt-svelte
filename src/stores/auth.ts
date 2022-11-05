import { writable } from 'svelte/store'

import { isLogged } from 'services/auth'
import storage from './index'

const user = storage<string>('user', null)
const isLoggedIn = writable<boolean>(false)

user.subscribe((data) => isLoggedIn.set(!!data))

const check = () => {
  isLogged().then((page) => user.set(page.data.id))
}

export { user, isLoggedIn, check }
