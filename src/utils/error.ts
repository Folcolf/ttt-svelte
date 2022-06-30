const manageErrors = (response: Response) => {
  if (!response.ok) {
    console.log(response)
    throw Error('Sorry, an error has occurred. Please try again later.')
  }
  return response
}

export { manageErrors }
