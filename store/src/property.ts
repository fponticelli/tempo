import { Emitter } from './emitter'
import { Observable } from './observable'

// @ts-ignore
export class Property<T> {
  readonly observable: Observable<T>

  constructor(
    private value: T,
    private equals: (a: T, b: T) => boolean = (a, b) => a === b
  ) {
    this.observable = this.emitter = new Emitter<T>()
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

  private readonly emitter: Emitter<T>

  private emit(value: T) {
    this.emitter.emit(value)
  }
}
