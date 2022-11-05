export default function (url: URL, options: RequestInit, timeout = 5000) {
  return new Promise((resolve, reject) => {
    fetch(url, options).then(resolve, reject)

    if (timeout) {
      const e = new Error('Connection timed out')
      setTimeout(reject, timeout, e)
    }
  })
}
