import { Property } from './property'
import { Reducer } from './reducer'
import { Observable3 } from './observable'
import { Emitter, Emitter3 } from './emitter'

export class Store<State, Action> {
  static ofState<State, Action>(options: {
    state: State
    reducer: Reducer<State, Action>
    equal?: (a: State, b: State) => boolean
  }) {
    return new Store(new Property(options.state, options.equal), options.reducer)
  }

  readonly observable: Observable3<State, Action, boolean>

  constructor(readonly property: Property<State>, private readonly reducer: Reducer<State, Action>) {
    this.observable = this.emitter = Emitter.ofThree<State, Action, boolean>()
  }

  process(action: Action) {
    const value = this.reducer(this.property.get(), action)
    const result = this.property.set(value)
    this.emitter.emit(value, action, result)
    return result
  }

  private readonly emitter: Emitter3<State, Action, boolean>
}
