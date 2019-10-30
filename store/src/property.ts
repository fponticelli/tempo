import { Emitter, Listener } from './emitter'

export class Property<T> {
  constructor(
    private value: T,
    private equals: (a: T, b: T) => boolean = (a, b) => a === b
  ) {}

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

  on(listener: Listener<T>) {
    this.emitter.on(listener)
  }

  once(listener: Listener<T>) {
    this.emitter.once(listener)
  }

  off(listener: Listener<T>) {
    this.emitter.off(listener)
  }

  private readonly emitter: Emitter<T> = new Emitter<T>()

  private emit(value: T) {
    this.emitter.emit(value)
  }
}
