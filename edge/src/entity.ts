import { WithSKind } from './with_kind'
import { Bag, ReadonlyBag } from './bag'

export type EntityChange<Component extends WithSKind> =
  | { kind: 'EntityCreated'; entity: Entity<Component> }
  | { kind: 'EntityUpdated'; entity: Entity<Component> }
  | { kind: 'EntityRemoved'; entity: Entity<Component> }

export const EntityChange = {
  created: <Component extends WithSKind>(
    entity: Entity<Component>
  ): EntityChange<Component> => ({
    kind: 'EntityCreated',
    entity
  }),
  updated: <Component extends WithSKind>(
    entity: Entity<Component>
  ): EntityChange<Component> => ({
    kind: 'EntityUpdated',
    entity
  }),
  removed: <Component extends WithSKind>(
    entity: Entity<Component>
  ): EntityChange<Component> => ({
    kind: 'EntityRemoved',
    entity
  })
}

export class Entity<Component extends WithSKind, Guarantee = never> {
  private _destroyed = false
  private _components = new Bag<Component>()
  constructor(
    components: Component[],
    readonly change: (entityChange: EntityChange<Component>) => void
  ) {
    this.addComponents(...components)
  }

  addComponent(c: Component): Entity<Component> {
    this._components.set(c)
    this.change(EntityChange.updated(this))
    return this
  }

  addComponents(...cs: Component[]) {
    if (cs.length === 0) return this
    cs.forEach(c => this._components.set(c))
    this.change(EntityChange.updated(this))
    return this
  }

  // update(handler: (cs: Component[]) => Component[]) {
  //   this._components = handler(this._components)
  //   this.change(EntityChange.updated(this))
  //   return this
  // }

  filterComponents(predicate: (c: Component) => boolean) {
    const previousLength = this._components.count()
    this._components.filter(predicate)
    if (this._components.count() === previousLength) return false
    this.change(EntityChange.updated(this))
    return true
  }

  removeComponent(component: Component): Entity<Component> {
    if (this._components.remove(component)) {
      this.change(EntityChange.updated(this))
    }
    return this as any
  }

  destroyed() {
    return this._destroyed
  }

  destroy() {
    if (this._destroyed) return
    this._destroyed = true
    this.change(EntityChange.removed(this))
  }

  components(): ReadonlyBag<Component> {
    return this._components
  }
}
