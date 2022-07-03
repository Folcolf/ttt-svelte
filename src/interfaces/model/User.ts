import type { Credential } from './Credential'
import type { Model } from './Model'
import type { Role } from './Role'

export type User = Model & {
  name: string
  credential: Credential
  role: Role
}
