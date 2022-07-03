import storage from './index'

type Theme = 'light' | 'dark'

export const theme = storage<Theme>('theme', 'light')
