import type { Pagination } from 'src/types/Pagination'
import { fetchTimeout, manageResponse, options } from 'services/utils'
import type { Page } from 'src/types/model/Page'
import type { User } from 'src/types/model/User'

const ROOT = '/api/users'

/**
 * Find all users with pagination
 *
 * @param {Pagination} { page, limit }
 * @return {*}  {Promise<Page<User[]>>}
 */
const find = ({ page, limit }: Pagination): Promise<Page<User[]>> => {
  return fetchTimeout(
    `${ROOT}?page=${page}&limit=${limit}`,
    options('GET', undefined)
  ).then(manageResponse)
}

/**
 * Get user by id
 *
 * @param {string} id
 * @return {*}  {Promise<Page<User>>}
 */
const getById = (id: string): Promise<Page<User>> => {
  return fetchTimeout(`${ROOT}/${id}`, options('GET', undefined)).then(
    manageResponse
  )
}

/**
 * Update user by id
 *
 * @param {string} id
 * @param {unknown} body
 * @return {*}  {Promise<Page<User>>}
 */
const update = (id: string, body: unknown): Promise<Page<User>> => {
  return fetchTimeout(`${ROOT}/${id}`, options('PUT', body)).then(
    manageResponse
  )
}

/**
 * Update password
 *
 * @param {string} id
 * @param {string} password
 * @return {*}  {Promise<Page<User>>}
 */
const updatePassword = (id: string, password: string): Promise<Page<User>> => {
  return fetchTimeout(
    `${ROOT}/${id}/password`,
    options('PUT', { password })
  ).then(manageResponse)
}

/**
 * Delete user by id
 *
 * @param {string} id
 * @return {*}  {Promise<Page<User>>}
 */
const remove = (id: string): Promise<Page<User>> => {
  return fetchTimeout(`${ROOT}/${id}`, options('DELETE', undefined)).then(
    manageResponse
  )
}

export { find, getById, update, updatePassword, remove }
