import { TupleToUnion } from '../types/tuples'
import { Merge } from '../types'

export const keys = <T>(object: T): (keyof T)[] => {
  return (Object.keys(object) as any) as (keyof T)[]
}

export const removeFields = <T, F extends (keyof T)[]>(
  ob: T,
  ...fields: F
): Omit<T, TupleToUnion<F>> => {
  return keys(ob).reduce((acc: any, key) => {
    if (fields.indexOf(key) < 0) acc[key] = ob[key]
    return acc
  }, {} as any) as Omit<T, TupleToUnion<F>>
}

export const merge = <A extends {}, B extends {}>(a: A, b: B): Merge<A, B> =>
  Object.assign({}, a, b) as Merge<A, B>
