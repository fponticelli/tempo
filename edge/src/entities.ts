import { Engine } from './engine'
import { Entity, EntityChange } from './entity'
import { remove } from 'tempo-std/lib/arrays'
import { WithSKind } from './with_kind'

export class Entities<Component extends WithSKind, Property extends WithSKind> {
  private _entities = [] as Entity<Component>[]
  constructor(readonly engine: Engine<Component, Property>) {}

  create(components: Component[]) {
    const entity = new Entity(components, this.engine.statusChange)
    this._entities.push(entity)
    this.engine.statusChange(EntityChange.created(entity))
  }

  _removeOne(entity: Entity<Component>) {
    return remove(this._entities, entity)
  }

  remove(predicate: (e: Entity<Component>) => boolean) {
    for (const entity of this._entities) {
      if (predicate(entity)) {
        entity.destroy()
        return true
      }
    }
    return false
  }

  filterEntities(predicate: (e: Entity<Component>) => boolean) {
    let removed = false
    for (const entity of this._entities) {
      if (predicate(entity)) {
        entity.destroy()
        removed = true
      }
    }
    return removed
  }

  clear() {
    this.filterEntities(_ => true)
    return this
  }

  values(): ReadonlyArray<Entity<Component>> {
    return this._entities
  }

  count() {
    return this._entities.length
  }
}
