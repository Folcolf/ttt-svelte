import type { Pagination } from 'interfaces/Pagination'
import { fetchTimeout } from 'services/utils'
import { options } from './utils'

const ROOT = '/api/games'

/**
 * Find all games with pagination
 *
 * @param {Pagination} { page, limit }
 * @return {*}  {Promise<Response>}
 */
const find = ({ page, limit }: Pagination): Promise<Response> => {
  return fetchTimeout(
    `${ROOT}?page=${page}&limit=${limit}`,
    options('GET', undefined)
  )
}

/**
 * Count all games
 *
 * @return {*}  {Promise<Response>}
 */
const count = (): Promise<Response> => {
  return fetchTimeout(`${ROOT}/count`, options('GET', undefined))
}

/**
 * Count games by user id
 *
 * @param {string} id
 * @return {*}  {Promise<Response>}
 */
const countByUser = (id: string): Promise<Response> => {
  return fetchTimeout(`${ROOT}/count/${id}`, options('GET', undefined))
}

/**
 * Get game by id
 *
 * @param {string} id
 * @return {*}  {Promise<Response>}
 */
const getById = (id: string): Promise<Response> => {
  return fetchTimeout(`${ROOT}/${id}`, options('GET', undefined))
}

/**
 * Create new game
 *
 * @param {unknown} body
 * @return {*}  {Promise<Response>}
 */
const create = (body: unknown): Promise<Response> => {
  return fetchTimeout(ROOT, options('POST', body))
}

/**
 * Update game by id
 *
 * @param {string} id
 * @param {unknown} body
 * @return {*}  {Promise<Response>}
 */
const update = (id: string, body: unknown): Promise<Response> => {
  return fetchTimeout(`${ROOT}/${id}`, options('PUT', body))
}

/**
 * Delete game by id
 *
 * @param {string} id
 * @return {*}  {Promise<Response>}
 */
const remove = (id: string): Promise<Response> => {
  return fetchTimeout(`${ROOT}/${id}`, options('DELETE', undefined))
}

export { find, count, countByUser, getById, create, update, remove }
