import type { Pagination } from 'interfaces/Pagination'

const find = ({ page, limit }: Pagination): Promise<Response> => {
  return fetch(`/api/users?page=${page}&limit=${limit}`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

const getById = (id: string): Promise<Response> => {
  return fetch(`/api/users/${id}`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

const update = (id: string, body: unknown): Promise<Response> => {
  return fetch(`/api/users/${id}`, {
    method: 'PUT',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
}

const updatePassword = (id: string, password: string): Promise<Response> => {
  return fetch(`/api/users/${id}/password`, {
    method: 'PUT',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password }),
  })
}

const remove = (id: string): Promise<Response> => {
  return fetch(`/api/users/${id}`, {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export { find, getById, update, updatePassword, remove }
