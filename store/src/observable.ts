import { Listener } from './listener'

export interface Observable<T> {
  on(listener: Listener<T>): void
  off(listener: Listener<T>): boolean
  once(listener: Listener<T>): void
}
