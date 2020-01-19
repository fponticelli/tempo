export enum Ordering {
  LT = -1,
  EQ = 0,
  GT = 1
}

export class Ord<T> {
  static fromNumberComparison<T>(compare: (a: T, b: T) => number) {
    return new Ord<T>(fromNumberComparison(compare))
  }

  constructor(
    readonly compare: (a: T, b: T) => Ordering
  ) {}

  max(a: T, b: T) {
    switch (this.compare(a, b)) {
      case Ordering.LT:
      case Ordering.EQ:
        return a
      case Ordering.GT:
        return b
    }
  }

  min(a: T, b: T) {
    switch (this.compare(a, b)) {
      case Ordering.GT:
      case Ordering.EQ:
        return a
      case Ordering.LT:
        return b
    }
  }

  equal(a: T, b: T) {
    switch (this.compare(a, b)) {
      case Ordering.EQ:
        return true
      default:
        return false
    }
  }

  contramap<B>(f: (b: B) => T): Ord<B> {
    return new Ord((b0: B, b1: B) => this.compare(f(b0), f(b1)))
  }

  inverse(): Ord<T> {
    return new Ord((a0: T, a1: T) => this.compare(a1, a0))
  }

  numberComparison(a0: T, a1: T): number {
    return this.compare(a0, a1)
  }
}

export const fromNumberComparison = <A>(f: (a: A, b: A) => number) => (a: A, b: A) => {
  const r = f(a, b)
  if (r < 0)
    return Ordering.LT
  else if (r === 0)
    return Ordering.EQ
  else
    return Ordering.GT
}
