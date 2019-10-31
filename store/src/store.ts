import { Property } from './property'
import { Reducer } from './reducer'
import { Middleware } from './middleware'

export class Store<State, Action> {
  static ofState<State, Action>(options: {
    state: State
    reducer: Reducer<State, Action>
    equals?: (a: State, b: State) => boolean
    middleware?: Middleware<State, Action>
  }) {
    return new Store(
      new Property(options.state, options.equals),
      options.reducer,
      options.middleware
    )
  }

  constructor(
    readonly property: Property<State>,
    private readonly reducer: Reducer<State, Action>,
    private readonly middleware: Middleware<State, Action> = () => {}
  ) {}

  dispatch(action: Action) {
    const value = this.reducer(this.get(), action)
    if (this.property.set(value)) {
      this.middleware(value, action, (action: Action) => this.dispatch(action))
    }
  }

  get() {
    return this.property.get()
  }
}
