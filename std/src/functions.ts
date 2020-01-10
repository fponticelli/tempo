import { Fun1, FirstArgument } from './types'

export function compose<A>(): (a: A) => A
export function compose<A, B>(f1: (a: A) => B): (a: A) => B
export function compose<A, B, C>(f1: (a: A) => B, f2: (b: B) => C): (a: A) => C
export function compose<A, B, C, D>(f1: (a: A) => B, f2: (b: B) => C, f3: (c: C) => D): (a: A) => D
export function compose<A, B, C, D, E>(f1: (a: A) => B, f2: (b: B) => C, f3: (c: C) => D, f4: (d: D) => E): (a: A) => E
export function compose<A, B, C, D, E, F>(f1: (a: A) => B, f2: (b: B) => C, f3: (c: C) => D, f4: (d: D) => E, f5: (e: E) => F): (a: A) => F
export function compose<A, B, C, D, E, F, G>
  (f1: (a: A) => B, f2: (b: B) => C, f3: (c: C) => D, f4: (d: D) => E, f5: (e: E) => F, f6: (f: F) => G): (a: A) => G
export function compose<Args extends Fun1<any, any>[]>(...args: Args) {
  return (a: FirstArgument<Args[0]>) => args.reduce((acc, f) => f(acc), a)
}

const f = compose(
  (a: number) => `${a}`,
  (b: string) => b === '1',
  (c: boolean) => c ? 1 : 0
)

console.log(f(1))
