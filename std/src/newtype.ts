import { Option, ofValue } from './option'
import { Maybe } from './maybe'

/**
 * Usage:
 * export interface Int extends Newtype<
 *   number,
 *   { readonly Int: unique symbol }
 * > {}
 *
 * export const Int = new class extends NewtypeClass<Int> {
 *   isValid(v: number) { return Number.isInteger(v) }
 * }()
 */

export interface Newtype<V, S> {
  readonly _T: V
  readonly _S: S
}

export abstract class NewtypeClass<T extends Newtype<any, any>> {
  abstract isValid(v: T['_T']): boolean
  unsafeOf(v: T['_T']): T {
    return v as unknown as T
  }
  of(v: T['_T']): Option<T> {
    return ofValue(this.maybeOf(v))
  }
  maybeOf(v: T['_T']): Maybe<T> {
    return this.isValid(v) ? v as unknown as T : undefined
  }
  get(v: T): T['_T'] {
    return v as unknown as T['_T']
  }
  maybeModify(f: (v: T['_T']) => T['_T']): (value: T) => Maybe<T> {
    return (value: T) => this.maybeOf(f(this.get(value)))
  }
  modify(f: (v: T['_T']) => T['_T']): (value: T) => Option<T> {
    const mf = this.maybeModify(f)
    return (value: T) => ofValue(mf(value))
  }
  unsafeModify(f: (v: T['_T']) => T['_T']): (value: T) => T {
    return (value: T) => this.unsafeOf(f(this.get(value)))
  }
}
