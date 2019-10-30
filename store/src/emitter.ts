export type Listener<T> = (value: T) => void

export class Emitter<T> {
  readonly listeners: Listener<T>[] = []

  emit(value: T) {
    this.listeners.forEach(listener => listener(value))
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
    const wrapper = (value: T) => {
      this.off(wrapper)
      listener(value)
    }
    this.on(wrapper)
  }
}
