import { writable } from 'svelte/store'

const snackbar = writable(false)
const message = writable('')
const type = writable('')

export { snackbar, message, type }
