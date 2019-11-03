import { Listener } from './listener'

export interface Observable<T extends any[]> {
  on(listener: Listener<T>): void
  off(listener: Listener<T>): boolean
  once(listener: Listener<T>): void
}

export type Observable1<T> = Observable<[T]>
export type Observable2<A, B> = Observable<[A, B]>
export type Observable3<A, B, C> = Observable<[A, B, C]>
