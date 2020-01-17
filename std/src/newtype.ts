import { Maybe, nothing } from './maybe'

export interface Newtype<V, S extends Symbol> {
  readonly _T: V
  readonly _S: S
}

export const wrapUnsafe = <T extends Newtype<any, any>>(value: T['_T']): T => value as unknown as T

export const unwrap = <T extends Newtype<any, any>>(wrapped: T) => wrapped as T['_T']

export const makeWrap = <T extends Newtype<any, any>>(isValid: (v: T['_T']) => boolean) =>
  (v: T['_T']): Maybe<T> => isValid(v) ? v as unknown as T : nothing
