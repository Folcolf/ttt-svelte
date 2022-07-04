import type { Page } from 'interfaces/model/Page'
import type { User } from 'interfaces/model/User'
import {
  fetchTimeout,
  manageErrors,
  manageResponse,
  options,
} from 'services/utils'

/**
 * Login with email and password
 *
 * @param {string} email
 * @param {string} password
 * @return {*}  {Promise<Page<User>>}
 */
const login = (email: string, password: string): Promise<Page<User>> => {
  return fetchTimeout('/api/auth/login', options('POST', { email, password }))
    .then(manageResponse)
    .catch(manageErrors)
}

/**
 * Register the user with email and password
 *
 * @param {string} email
 * @param {string} name
 * @param {string} password
 * @return {*}  {Promise<Page<User>>}
 */
const register = (
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
const logout = (): Promise<Page<User>> => {
  return fetchTimeout('/api/auth/logout', options('POST', undefined)).then(
    manageResponse
  )
}

/**
 * Get the user
 *
 * @return {*}  {Promise<Page<User>>}
 */
const isLogged = (): Promise<Page<User>> => {
  return fetchTimeout('/api/auth/logged', options('GET', undefined)).then(
    manageResponse
  )
}

export { login, register, logout, isLogged }
