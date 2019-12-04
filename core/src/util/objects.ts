import { TupleToUnion } from '../types/tuples'

export const keys = <T>(object: T): (keyof T)[] => {
  return Object.keys(object) as any as (keyof T)[]
}

export const removeFields = <T, F extends (keyof T)[]>(ob: T, ...fields: F): Omit<T, TupleToUnion<F>> => {
  return keys(ob).reduce(
    (acc: any, key) => {
      if (fields.indexOf(key) < 0)
        acc[key] = ob[key]
      return acc
    },
    {} as any
  ) as Omit<T, TupleToUnion<F>>
}
