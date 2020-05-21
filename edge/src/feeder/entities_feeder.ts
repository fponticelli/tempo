import { Feeder } from '../feeder'
import { StatusChange } from '../engine'
import { WithSKind } from '../with_kind'
import { Entity } from '../entity'

export class ComponentsFeeder<
  Component extends WithSKind,
  Property extends WithSKind,
  Payload extends any[]
> implements Feeder<Component, Property, Payload> {
  // static ofKind<T extends string | symbol | number>(kind: T) {
  //   return new ComponentsFeeder((p: { kind: T }) => {
  //     return p.kind === kind ? [p] : undefined
  //   })
  // }

  static ofKinds<Component extends WithSKind, Property extends WithSKind>(
    ...keys: Component['kind'][]
  ) {
    return new ComponentsFeeder<Component, Property, [Entity<Component>]>(
      (entity: Entity<Component>) => {
        const components = entity.components()
        for (const key of keys) {
          if (!components.hasKind(key)) return undefined
        }
        return [entity]
      }
    )
  }

  private _payload: undefined | Payload

  constructor(
    readonly matcher: (entities: Entity<Component>) => Payload | undefined
  ) {}

  payload(): undefined | Payload {
    return this._payload
  }
  update(change: StatusChange<Component, Property>) {
    let maybe
    switch (change.kind) {
      case 'EntityCreated':
      case 'EntityUpdated':
        maybe = this.matcher(change.entity)
        if (typeof maybe !== 'undefined') {
          this._payload = maybe
        }
        return
      case 'EntityRemoved':
        maybe = this.matcher(change.entity)
        if (typeof maybe !== 'undefined') {
          this._payload = undefined
        }
    }
  }
}
