export default function (url, options, timeout = 5000) {
  return new Promise((resolve, reject) => {
    fetch(url, options).then(resolve, reject)

    if (timeout) {
      const e = new Error('Connection timed out')
      setTimeout(reject, timeout, e)
    }
  })
}
