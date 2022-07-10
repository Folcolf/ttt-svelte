import _private from './private'
import _public from './public'

import type { Route } from 'types/Route'

const routes: Route[] = []

routes.push(..._public)
routes.push(..._private)

export { routes }
