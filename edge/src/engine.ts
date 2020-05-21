import { Phases } from './phases'
import { Entities } from './entities'
import { Properties, PropertyChange } from './properties'
import { EntityChange } from './entity'
import { WithSKind } from './with_kind'

export type StatusChange<
  Component extends WithSKind,
  Property extends WithSKind
> = EntityChange<Component> | PropertyChange<Property>

export class Engine<Component extends WithSKind, Property extends WithSKind> {
  constructor(
    readonly phases: Phases<Component, Property>,
    readonly entities: Entities<Component, Property>,
    readonly properties: Properties<Component, Property>
  ) {
    this.phases = new Phases(this)
    this.entities = new Entities(this)
    this.properties = new Properties(this)
  }

  statusChange(change: StatusChange<Component, Property>) {
    if (change.kind === 'EntityRemoved') {
      this.entities._removeOne(change.entity)
    }
    for (const phase of this.phases.get()) {
      phase.dispatch(change)
    }
  }

  clear() {
    this.entities.clear()
    this.properties.clear()
  }
}
