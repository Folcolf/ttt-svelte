import type { Pagination } from 'interfaces/Pagination'

const find = ({ page, limit }: Pagination): Promise<Response> => {
  return fetch(`/api/games?page=${page}&limit=${limit}`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

const getById = (id: string): Promise<Response> => {
  return fetch(`/api/games/${id}`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

const create = (body: unknown): Promise<Response> => {
  return fetch('/api/games', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
}

const update = (id: string, body: unknown): Promise<Response> => {
  return fetch(`/api/games/${id}`, {
    method: 'PUT',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
}

const remove = (id: string): Promise<Response> => {
  return fetch(`/api/games/${id}`, {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export { find, getById, create, update, remove }
