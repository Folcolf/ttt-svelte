import { fetchTimeout, manageResponse, options } from 'services/utils'

import type { Game } from 'types/model/Game'
import type { Page } from 'types/model/Page'
import type { Pagination } from 'types/Pagination'

const ROOT = '/api/games'

/**
 * Find all games with pagination
 *
 * @param {Pagination} { page, limit }
 * @return {*}  {Promise<Page<Game[]>>}
 */
const find = async ({ page, limit }: Pagination): Promise<Page<Game[]>> => {
  return fetchTimeout(
    `${ROOT}?page=${page}&limit=${limit}`,
    options('GET', undefined)
  ).then(manageResponse)
}

/**
 * Count all games
 *
 * @return {*}  {Promise<Page<number>>}
 */
const count = async (): Promise<Page<number>> => {
  return fetchTimeout(`${ROOT}/count`, options('GET', undefined)).then(
    manageResponse
  )
}

/**
 * Count games by user id
 *
 * @param {string} id
 * @return {*}  {Promise<Page<number>>}
 */
const countByUser = async (id: string): Promise<Page<number>> => {
  return fetchTimeout(`${ROOT}/count/${id}`, options('GET', undefined)).then(
    manageResponse
  )
}

/**
 * Get game by id
 *
 * @param {string} id
 * @return {*}  {Promise<Page<Game>>}
 */
const getById = async (id: string): Promise<Page<Game>> => {
  return fetchTimeout(`${ROOT}/${id}`, options('GET', undefined)).then(
    manageResponse
  )
}

/**
 * Create new game
 *
 * @param {unknown} body
 * @return {*}  {Promise<Page<Game>>}
 */
const create = async (body: unknown): Promise<Page<Game>> => {
  return fetchTimeout(ROOT, options('POST', body)).then(manageResponse)
}

/**
 * Update game by id
 *
 * @param {string} id
 * @param {unknown} body
 * @return {*}  {Promise<Page<Game>>}
 */
const update = async (id: string, body: unknown): Promise<Page<Game>> => {
  return fetchTimeout(`${ROOT}/${id}`, options('PUT', body)).then(
    manageResponse
  )
}

/**
 * Delete game by id
 *
 * @param {string} id
 * @return {*}  {Promise<Page<Game>>}
 */
const remove = async (id: string): Promise<Page<Game>> => {
  return fetchTimeout(`${ROOT}/${id}`, options('DELETE', undefined)).then(
    manageResponse
  )
}

export { find, count, countByUser, getById, create, update, remove }
