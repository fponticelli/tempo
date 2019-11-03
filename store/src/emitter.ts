import { Listener } from './listener'
import { Observable } from './observable'

export class Emitter<T extends any[]> implements Observable<T> {
  static ofOne<A>(): Emitter1<A> { return new Emitter<[A]>() }
  static ofTwo<A, B>(): Emitter2<A, B> { return new Emitter<[A, B]>() }
  static ofThree<A, B, C>(): Emitter3<A, B, C> { return new Emitter<[A, B, C]>() }

  readonly listeners: Listener<T>[] = []

  private constructor() {}

  emit(...value: T) {
    this.listeners.forEach(listener => listener(...value))
  }

  on(listener: Listener<T>) {
    this.listeners.push(listener)
  }

  off(listener: Listener<T>) {
    const index = this.listeners.indexOf(listener)
    if (index < 0)
      return false
    this.listeners.splice(index, 1)
    return true
  }

  once(listener: Listener<T>) {
    const wrapper = (...values: T) => {
      this.off(wrapper)
      listener(...values)
    }
    this.on(wrapper)
  }
}

export type Emitter1<T> = Emitter<[T]>
export type Emitter2<A, B> = Emitter<[A, B]>
export type Emitter3<A, B, C> = Emitter<[A, B, C]>
