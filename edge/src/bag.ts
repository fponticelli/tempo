import { WithSKind } from './with_kind'

export interface ReadonlyBag<T extends WithSKind> {
  hasKind(kind: T['kind']): boolean
  getByKind(kind: T['kind']): undefined | T
  values(): IterableIterator<T>
  kinds(): IterableIterator<T['kind']>
  count(): number
}

export class Bag<T extends WithSKind> implements ReadonlyBag<T> {
  private _map = new Map<T['kind'], T>()
  constructor() {}

  /**
   * Returns `true` if the value was inserted anew, `false` if the value was updated.
   * @param value
   */
  set(value: T) {
    const exists = this._map.has(value.kind)
    this._map.set(value.kind, value)
    return !exists
  }

  hasKind(kind: T['kind']) {
    return this._map.has(kind)
  }

  getByKind(kind: T['kind']): undefined | T {
    return this._map.get(kind)
  }

  remove(value: T) {
    return this.removeByKind(value.kind)
  }

  filter(predicate: (value: T) => boolean) {
    this.removeByPredicate(v => !predicate(v))
  }

  removeByPredicate(predicate: (value: T) => boolean) {
    for (const value of this._map.values()) {
      if (predicate(value)) {
        this.remove(value)
      }
    }
  }

  removeByKind(kind: T['kind']) {
    if (this._map.has(kind)) {
      this._map.delete(kind)
      return true
    } else {
      return false
    }
  }

  values(): IterableIterator<T> {
    return this._map.values()
  }

  kinds(): IterableIterator<T['kind']> {
    return this._map.keys()
  }

  count() {
    return this._map.size
  }
}
