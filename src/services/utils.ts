/**
 * Create new request init for fetch
 *
 * @param {string} method
 * @param {unknown} body
 * @return {*}  {RequestInit}
 */
const options = (method: string, body: unknown): RequestInit => {
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
      reject(new Error('timeout'))
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
  if (!response.ok) {
    throw Error('Sorry, an error has occurred. Please try again later.')
  }
  return response.json()
}

/**
 * Check if an error is thrown
 *
 * @param {Error} error
 */
const manageErrors = (error: Error) => {
  throw Error('Sorry, an error has occurred. Please try again later.')
}

export { options, fetchTimeout }
export { manageResponse, manageErrors }
