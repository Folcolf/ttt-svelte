import { fetchTimeout, manageResponse, options } from 'services/utils'

import type { Page } from 'types/model/Page'
import type { User } from 'types/model/User'

/**
 * Login with email and password
 *
 * @param {string} email
 * @param {string} password
 * @return {*}  {Promise<Page<User>>}
 */
const login = async (email: string, password: string): Promise<Page<User>> => {
  return fetchTimeout(
    '/api/auth/login',
    options('POST', { email, password })
  ).then(manageResponse)
}

/**
 * Register the user with email and password
 *
 * @param {string} email
 * @param {string} name
 * @param {string} password
 * @return {*}  {Promise<Page<User>>}
 */
const register = async (
  email: string,
  name: string,
  password: string
): Promise<Page<User>> => {
  return fetchTimeout(
    '/api/auth/register',
    options('POST', { email, name, password })
  ).then(manageResponse)
}

/**
 * Logout the user
 *
 * @return {*}  {Promise<Page<User>>}
 */
const logout = async (): Promise<Page<User>> => {
  return fetchTimeout('/api/auth/logout', options('POST', undefined)).then(
    manageResponse
  )
}

/**
 * Get the user
 *
 * @return {*}  {Promise<Page<User>>}
 */
const isLogged = async (): Promise<Page<User>> => {
  return fetchTimeout('/api/auth/logged', options('GET', undefined)).then(
    manageResponse
  )
}

export { login, register, logout, isLogged }
