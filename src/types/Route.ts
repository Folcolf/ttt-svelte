export type Route = {
  path: string
  component: any
  meta: RouteMeta
}

export type RouteMeta = {
  title: string
  description: string
  icon: string
  private?: boolean
  loggedIn?: boolean
  invisible?: boolean
}
