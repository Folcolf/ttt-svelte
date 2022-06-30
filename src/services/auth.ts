import { manageErrors } from 'src/utils/error'

const URL = 'http://localhost:8080'

const login = (email, password): Promise<Response> => {
  return fetch(URL + '/api/auth/login', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then(manageErrors)
}

const register = (email, name, password): Promise<Response> => {
  return fetch('/api/auth/register', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, name, password }),
  }).then(manageErrors)
}

const logout = (): Promise<Response> => {
  return fetch('/api/auth/logout', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(manageErrors)
}

const isLogged = (): Promise<Response> => {
  return fetch('/api/auth/logged', {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(manageErrors)
}

export { login, register, logout, isLogged }
