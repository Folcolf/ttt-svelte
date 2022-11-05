import { fetchTimeout, manageResponse, options } from 'services/utils'

import type { Page } from 'types/model/Page'
import type { User } from 'types/model/User'
import type { Pagination } from 'types/Pagination'

const ROOT = '/api/users'

/**
 * Find all users with pagination
 *
 * @param {Pagination} { page, limit }
 * @return {*}  {Promise<Page<User[]>>}
 */
const find = async ({ page, limit }: Pagination): Promise<Page<User[]>> => {
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
const getById = async (id: string): Promise<Page<User>> => {
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
const update = async (id: string, body: unknown): Promise<Page<User>> => {
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
const updatePassword = async (
  id: string,
  password: string
): Promise<Page<User>> => {
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
const remove = async (id: string): Promise<Page<User>> => {
  return fetchTimeout(`${ROOT}/${id}`, options('DELETE', undefined)).then(
    manageResponse
  )
}

export { find, getById, update, updatePassword, remove }
