import { BaseBuilder } from './base_builder'
import { IBuilder } from './ibuilder'
import { ComponentTemplate } from '../impl/component'

export class ComponentBuilder<State, Action, Query>
  extends BaseBuilder<State, Action, Query>
  implements IBuilder<State, Action, Query> {
  public delayed = false
  public equals: (a: State, b: State) => boolean = (a, b) => a === b
  constructor(readonly reducer: (state: State, action: Action) => State) {
    super()
  }
  build() {
    return new ComponentTemplate<State, Action, Query>(
      this.delayed,
      this.reducer,
      this.equals,
      this._children
    )
  }
}
