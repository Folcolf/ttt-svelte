export default interface Route {
  path: string
  component: any
  meta: RouteMeta
}

export interface RouteMeta {
  title: string
  description: string
  icon: string
  private?: boolean
}
