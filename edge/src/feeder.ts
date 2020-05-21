import { StatusChange } from './engine'
import { WithSKind } from './with_kind'

export interface Feeder<
  Component extends WithSKind,
  Property extends WithSKind,
  Payload extends any[]
> {
  update(change: StatusChange<Component, Property>): void
  payload(): Payload | undefined
}
