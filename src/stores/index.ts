import type { Writable } from 'svelte/store'
import { get, writable } from 'svelte/store'

/**
 * Create a writable store
 *
 * @template T
 * @param {string} key
 * @param {T} initValue
 * @return {*}  {Writable<T>}
 */
const storage = <T>(key: string, initValue: T): Writable<T> => {
  const store = writable<T>(initValue)
  const storedValueStr = localStorage.getItem(key)

  if (storedValueStr != null) {
    store.set(JSON.parse(storedValueStr))
  }

  store.subscribe((val) => {
    if ([null, undefined].includes(val)) {
      localStorage.removeItem(key)
    } else {
      localStorage.setItem(key, JSON.stringify(val))
    }
  })

  window.addEventListener('storage', () => {
    const storedValueStrWindow = localStorage.getItem(key)
    if (storedValueStrWindow == null) {
      return
    }

    const localValue: T = JSON.parse(storedValueStrWindow)
    if (localValue !== get(store)) {
      store.set(localValue)
    }
  })

  return store
}

export default storage
