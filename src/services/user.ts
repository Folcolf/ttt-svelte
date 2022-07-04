import type { Pagination } from 'interfaces/Pagination'
import { fetchTimeout, options } from 'services/utils'

/**
 * Find all users with pagination
 *
 * @param {Pagination} { page, limit }
 * @return {*}  {Promise<Response>}
 */
const find = ({ page, limit }: Pagination): Promise<Response> => {
  return fetchTimeout(
    `/api/users?page=${page}&limit=${limit}`,
    options('GET', undefined)
  )
}

/**
 * Get user by id
 *
 * @param {string} id
 * @return {*}  {Promise<Response>}
 */
const getById = (id: string): Promise<Response> => {
  return fetchTimeout(`/api/users/${id}`, options('GET', undefined))
}

/**
 * Update user by id
 *
 * @param {string} id
 * @param {unknown} body
 * @return {*}  {Promise<Response>}
 */
const update = (id: string, body: unknown): Promise<Response> => {
  return fetchTimeout(`/api/users/${id}`, options('PUT', body))
}

/**
 * Update password
 *
 * @param {string} id
 * @param {string} password
 * @return {*}  {Promise<Response>}
 */
const updatePassword = (id: string, password: string): Promise<Response> => {
  return fetchTimeout(`/api/users/${id}/password`, options('PUT', { password }))
}

/**
 * Delete user by id
 *
 * @param {string} id
 * @return {*}  {Promise<Response>}
 */
const remove = (id: string): Promise<Response> => {
  return fetchTimeout(`/api/users/${id}`, options('DELETE', undefined))
}

export { find, getById, update, updatePassword, remove }
