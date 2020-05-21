import { Feeder } from '../feeder'
import { StatusChange } from '../engine'
import { WithSKind } from '../with_kind'

export class PropertyFeeder<
  Component extends WithSKind,
  Property extends WithSKind,
  Payload extends any[]
> implements Feeder<Component, Property, Payload> {
  static ofKind<T extends WithSKind>(kind: T['kind']) {
    return new PropertyFeeder((p: T) => {
      return p.kind === kind ? [p] : undefined
    })
  }

  private _payload: undefined | Payload

  constructor(readonly matcher: (property: Property) => Payload | undefined) {}

  payload(): undefined | Payload {
    return this._payload
  }
  update(change: StatusChange<Component, Property>) {
    let maybe
    switch (change.kind) {
      case 'PropertyAdded':
        maybe = this.matcher(change.property)
        if (typeof maybe !== 'undefined') {
          this._payload = maybe
        }
        return
      case 'PropertyRemoved':
        maybe = this.matcher(change.property)
        if (typeof maybe !== 'undefined') {
          this._payload = undefined
        }
        return
    }
  }
}
