import { writable } from 'svelte/store'
import type { Color } from 'sveltestrap/src/shared.js'

const snackbar = writable<boolean>(false)
const message = writable<string>('')
const type = writable<Color>()

const show = (t: Color, m: string) => {
  snackbar.set(true)
  message.set(m)
  type.set(t)
}

export { show, snackbar, message, type }
