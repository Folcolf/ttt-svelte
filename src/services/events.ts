const createEvent = (url: string) => {
  let sse
  try {
    sse = new EventSource(url, { withCredentials: true })
  } catch (error) {
    console.log(error)
  }
  return sse
}

export { createEvent }
