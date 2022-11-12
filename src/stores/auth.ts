import { get, writable } from 'svelte/store'
import { decodeJwt } from 'jose'

import { isLogged } from 'services/auth'
import storage from './index'

const user = storage<string>('user', null)
const isLoggedIn = writable<boolean>(false)

user.subscribe((data) => isLoggedIn.set(!!data))

const check = async (): Promise<void> => {
  return isLogged()
    .then((page) => user.set(page.data))
    .catch((e) => {
      user.set(null)
      throw e
    })
}

const getUser = () => {
  const data = get(user)
  if (!data) {
    return null
  }
  return decodeJwt(data).user
}

export { user, isLoggedIn, check, getUser }
