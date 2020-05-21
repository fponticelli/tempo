import { Prepend } from 'tempo-std/lib/types/tuples'
import { Feeder } from '../feeder'
import { StatusChange } from '../engine'
import { flatten } from 'tempo-std/lib/arrays'
import { WithSKind } from '../with_kind'

export class CombineFeeders<
  Component extends WithSKind,
  Property extends WithSKind,
  Payload extends any[]
> implements Feeder<Component, Property, Payload> {
  static ofTwo<
    Component extends WithSKind,
    Property extends WithSKind,
    A extends [any],
    B extends any[]
  >(a: Feeder<Component, Property, A>, b: Feeder<Component, Property, B>) {
    return new CombineFeeders<Component, Property, Prepend<A[0], B>>([a, b])
  }
  static ofThree<
    Component extends WithSKind,
    Property extends WithSKind,
    A extends [any],
    B extends [any],
    C extends any[]
  >(
    a: Feeder<Component, Property, A>,
    b: Feeder<Component, Property, B>,
    c: Feeder<Component, Property, C>
  ) {
    return new CombineFeeders<
      Component,
      Property,
      Prepend<A[0], Prepend<B[0], C>>
    >([a, b, c])
  }
  static ofFour<
    Component extends WithSKind,
    Property extends WithSKind,
    A extends [any],
    B extends [any],
    C extends [any],
    D extends any[]
  >(
    a: Feeder<Component, Property, A>,
    b: Feeder<Component, Property, B>,
    c: Feeder<Component, Property, C>,
    d: Feeder<Component, Property, D>
  ) {
    return new CombineFeeders<
      Component,
      Property,
      Prepend<A[0], Prepend<B[0], Prepend<C[0], D>>>
    >([a, b, c, d])
  }
  static ofFive<
    Component extends WithSKind,
    Property extends WithSKind,
    A extends [any],
    B extends [any],
    C extends [any],
    D extends [any],
    E extends any[]
  >(
    a: Feeder<Component, Property, A>,
    b: Feeder<Component, Property, B>,
    c: Feeder<Component, Property, C>,
    d: Feeder<Component, Property, D>,
    e: Feeder<Component, Property, E>
  ) {
    return new CombineFeeders<
      Component,
      Property,
      Prepend<A[0], Prepend<B[0], Prepend<C[0], Prepend<D[0], E>>>>
    >([a, b, c, d, e])
  }
  static ofSix<
    Component extends WithSKind,
    Property extends WithSKind,
    A extends [any],
    B extends [any],
    C extends [any],
    D extends [any],
    E extends [any],
    F extends any[]
  >(
    a: Feeder<Component, Property, A>,
    b: Feeder<Component, Property, B>,
    c: Feeder<Component, Property, C>,
    d: Feeder<Component, Property, D>,
    e: Feeder<Component, Property, E>,
    f: Feeder<Component, Property, F>
  ) {
    return new CombineFeeders<
      Component,
      Property,
      Prepend<
        A[0],
        Prepend<B[0], Prepend<C[0], Prepend<D[0], Prepend<E[0], F>>>>
      >
    >([a, b, c, d, e, f])
  }

  private constructor(readonly feeders: Feeder<Component, Property, any>[]) {}

  payload(): Payload | undefined {
    const buff = [] as any[]
    for (let i = 0; i < this.feeders.length; i++) {
      const payload = this.feeders[i].payload()
      if (typeof payload === 'undefined') return undefined
      buff.push(payload)
    }

    return flatten(buff) as Payload
  }

  update(change: StatusChange<Component, Property>) {
    this.feeders.forEach(f => f.update(change))
  }
}
