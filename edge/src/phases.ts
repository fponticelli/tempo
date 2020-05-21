import { Engine } from './engine'
import { Phase } from './phase'
import { WithSKind } from './with_kind'

export class Phases<Component extends WithSKind, Property extends WithSKind> {
  private _phases = [] as Phase<Component, Property>[]
  constructor(readonly engine: Engine<Component, Property>) {}

  create() {
    const phase = new Phase<Component, Property>(this.engine)
    this._phases.push(phase)
    return phase
  }

  get(): ReadonlyArray<Phase<Component, Property>> {
    return this._phases
  }
}
