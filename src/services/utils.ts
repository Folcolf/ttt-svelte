import { navigate } from 'svelte-navigator'

import { user } from 'src/stores/auth'

/**
 * Create new request init for fetch
 *
 * @param {string} method
 * @param {unknown} body
 * @return {*}  {RequestInit}
 */
const createOptions = (method: string, body: unknown): RequestInit => {
  const credentials = 'include'
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')
  headers.append('Accept', 'application/json')

  const init: RequestInit = {
    method,
    credentials,
    headers,
  }

  if (body === undefined) {
    return init
  }

  init.body = JSON.stringify(body)

  return init
}

/**
 * Fetch with timeout
 *
 * @param {string} url
 * @param {RequestInit} options
 * @param {number} [timeout=5000]
 * @return {*}  {Promise<Response>}
 */
const fetchTimeout = (
  url: string,
  options: RequestInit,
  timeout: number = 5000
): Promise<Response> => {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(Error('Sorry, an error has occurred. Please try again later.'))
    }, timeout)

    fetch(url, options)
      .then(resolve)
      .catch(reject)
      .finally(() => {
        clearTimeout(timeoutId)
      })
  })
}

/**
 * Check if response is ok and return json
 *
 * @param {Response} response
 * @return {*}
 */
const manageResponse = (response: Response) => {
  console.log(response)

  if (!response.ok) {
    if (response.status === 401) {
      user.set(null)
      navigate('/login')
    }

    throw Error('Sorry, an error has occurred. Please try again later.')
  }
  return response.json()
}
export { createOptions as options, fetchTimeout, manageResponse }
