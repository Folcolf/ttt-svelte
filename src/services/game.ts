import type { Pagination } from 'interfaces/Pagination'
import { fetchTimeout } from 'services/utils'
import { options } from './utils'

/**
 * Find all games with pagination
 *
 * @param {Pagination} { page, limit }
 * @return {*}  {Promise<Response>}
 */
const find = ({ page, limit }: Pagination): Promise<Response> => {
  return fetchTimeout(
    `/api/games?page=${page}&limit=${limit}`,
    options('GET', undefined)
  )
}

/**
 * Count all games
 *
 * @return {*}  {Promise<Response>}
 */
const count = (): Promise<Response> => {
  return fetchTimeout('/api/games/count', options('GET', undefined))
}

/**
 * Get game by id
 *
 * @param {string} id
 * @return {*}  {Promise<Response>}
 */
const getById = (id: string): Promise<Response> => {
  return fetchTimeout(`/api/games/${id}`, options('GET', undefined))
}

/**
 * Create new game
 *
 * @param {unknown} body
 * @return {*}  {Promise<Response>}
 */
const create = (body: unknown): Promise<Response> => {
  return fetchTimeout('/api/games', options('POST', body))
}

/**
 * Update game by id
 *
 * @param {string} id
 * @param {unknown} body
 * @return {*}  {Promise<Response>}
 */
const update = (id: string, body: unknown): Promise<Response> => {
  return fetchTimeout(`/api/games/${id}`, options('PUT', body))
}

/**
 * Delete game by id
 *
 * @param {string} id
 * @return {*}  {Promise<Response>}
 */
const remove = (id: string): Promise<Response> => {
  return fetchTimeout(`/api/games/${id}`, options('DELETE', undefined))
}

export { find, count, getById, create, update, remove }
