export interface Increment {
  kind: 'increment'
}
export interface Decrement {
  kind: 'decrement'
}
export type Action = Increment | Decrement

export const decrement = (): Action => ({ kind: 'decrement' })
export const increment = (): Action => ({ kind: 'increment' })
