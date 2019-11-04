import { Emitter } from './emitter'
import { Observable1 } from './observable'
import { deepEqual } from './equality'

// @ts-ignore
export class Property<T> {
  readonly observable: Observable1<T>

  constructor(
    private value: T,
    private equals: (a: T, b: T) => boolean = deepEqual
  ) {
    this.observable = this.emitter = Emitter.ofOne()
  }

  set(value: T): boolean {
    if (this.equals(this.value, value)) {
      return false
    }
    this.value = value
    this.emit(this.value)
    return true
  }

  get() {
    return this.value
  }

  private readonly emitter: Emitter<[T]>

  private emit(value: T) {
    this.emitter.emit(value)
  }
}
