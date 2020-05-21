import { Engine, StatusChange } from './engine'
import { Feeder } from './feeder'
import { Emitter } from 'tempo-store/lib/emitter'
import { PropertyChange } from './properties'
import { EntityChange } from './entity'
import { WithSKind } from './with_kind'

export class Phase<Component extends WithSKind, Property extends WithSKind> {
  private readonly feeders = new Map<Feeder<any, any, any>, Emitter<any>>()
  constructor(readonly engine: Engine<Component, Property>) {}

  update() {
    this.feeders.forEach((emitter, feeder) => {
      const value = feeder.payload()
      if (typeof value !== 'undefined') {
        emitter.emit(...value)
      }
    })
  }

  dispatch(change: StatusChange<Component, Property>) {
    this.feeders.forEach((_, feeder) => {
      feeder.update(change)
    })
  }

  addFeeder<Payload extends any[]>(
    feeder: Feeder<Component, Property, Payload>
  ) {
    let emitter = this.feeders.get(feeder)
    if (typeof emitter === 'undefined') {
      emitter = new Emitter()
      for (const property of this.engine.properties.values().values()) {
        feeder.update(PropertyChange.added(property))
      }
      for (const e of this.engine.entities.values()) {
        feeder.update(EntityChange.created(e))
      }
    }
    return emitter
  }

  // addFeeder1<Payload>(feeder: Feeder<Component, Property, [Payload]>) {
  //   return this.addFeeder(feeder)
  // }

  // addFeeder2<Payload1, Payload2>(
  //   feeder: Feeder<Component, Property, [Payload1, Payload2]>
  // ) {
  //   return this.addFeeder(feeder)
  // }

  // addFeeder3<Payload1, Payload2, Payload3>(
  //   feeder: Feeder<Component, Property, [Payload1, Payload2, Payload3]>
  // ) {
  //   return this.addFeeder(feeder)
  // }

  // addFeeder4<Payload1, Payload2, Payload3, Payload4>(
  //   feeder: Feeder<
  //     Component,
  //     Property,
  //     [Payload1, Payload2, Payload3, Payload4]
  //   >
  // ) {
  //   return this.addFeeder(feeder)
  // }

  // addFeeder5<Payload1, Payload2, Payload3, Payload4, Payload5>(
  //   feeder: Feeder<
  //     Component,
  //     Property,
  //     [Payload1, Payload2, Payload3, Payload4, Payload5]
  //   >
  // ) {
  //   return this.addFeeder(feeder)
  // }

  // addFeeder6<Payload1, Payload2, Payload3, Payload4, Payload5, Payload6>(
  //   feeder: Feeder<
  //     Component,
  //     Property,
  //     [Payload1, Payload2, Payload3, Payload4, Payload5, Payload6]
  //   >
  // ) {
  //   return this.addFeeder(feeder)
  // }
}
