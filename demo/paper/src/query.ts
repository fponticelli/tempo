import { Size } from 'paper'

export type Query = {
  kind: 'MainAreaSize'
  callback: (size: Size) => void
}

export const Query = {
  mainAreaSize(callback: (size: Size) => void): Query {
    return { kind: 'MainAreaSize', callback }
  }
}
