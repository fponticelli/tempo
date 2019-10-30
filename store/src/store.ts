import { Property } from './property'
import { Reducer } from './reducer'
import { Middleware } from './middleware'

export class Store<State, Action> {
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
