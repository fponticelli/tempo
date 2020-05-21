import { Engine } from './engine'
import { Bag, ReadonlyBag } from './bag'
import { WithSKind } from './with_kind'
export type PropertyChange<Property> =
  | { kind: 'PropertyAdded'; property: Property }
  | { kind: 'PropertyRemoved'; property: Property }

export const PropertyChange = {
  added: <Property>(property: Property): PropertyChange<Property> => ({
    kind: 'PropertyAdded',
    property
  }),
  removed: <Property>(property: Property): PropertyChange<Property> => ({
    kind: 'PropertyRemoved',
    property
  })
}

export type PropertyAction<Property> =
  | { kind: 'Ignore' }
  | { kind: 'Remove' }
  | { kind: 'Update'; property: Property }

export const PropertyAction = {
  ignore: { kind: 'Ignore' } as PropertyAction<any>,
  remove: { kind: 'Remove' } as PropertyAction<any>,
  update: <Property>(property: Property): PropertyAction<Property> => ({
    kind: 'Update',
    property
  })
}

export class Properties<
  Component extends WithSKind,
  Property extends WithSKind
> {
  private _properties = new Bag<Property>()
  constructor(readonly engine: Engine<Component, Property>) {}

  add(property: Property) {
    this._properties.set(property)
    this.engine.statusChange(PropertyChange.added(property))
  }

  private removeImpl(property: Property) {
    if (this._properties.remove(property)) {
      this.engine.statusChange(PropertyChange.removed(property))
    }
  }

  // update(handler: (property: Property) => PropertyAction<Property>) {
  //   let i = this._properties.count()
  //   while (--i >= 0) {
  //     const property = this._properties[i]
  //     const action = handler(property)
  //     switch (action.kind) {
  //       case 'Ignore':
  //         break
  //       case 'Remove':
  //         this.removeImpl(property)
  //         break
  //       case 'Update':
  //         this.removeImpl(property)
  //         this.add(action.property)
  //     }
  //   }
  //   return this
  // }

  remove(property: Property) {
    this.removeImpl(property)
  }

  filterProperties(predicate: (property: Property) => boolean) {
    let removed = false
    for (const property of this._properties.values()) {
      if (!predicate(property)) {
        this.removeImpl(property)
        removed = true
      }
    }
    return removed
  }

  clear() {
    this.filterProperties(_ => true)
    return this.engine
  }

  values(): ReadonlyBag<Property> {
    return this._properties
  }

  count() {
    return this._properties.count()
  }
}
