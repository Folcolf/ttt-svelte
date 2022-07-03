export type Page<T> = {
  data: T
  timestamp: number
  _metadata: Metadata
}

type Metadata = {
  limit: number
  page: number
  total: number
  links: Array<string>
}
