import { BaseBuilder } from './base_builder'
import { IBuilder } from './ibuilder'
import { SimpleComponentTemplate } from '../simple_component'

export class SimpleComponentBuilder<State, Query>
  extends BaseBuilder<State, State, Query>
  implements IBuilder<State, State, Query> {
  public delayed = false
  constructor() {
    super()
  }
  build() {
    return new SimpleComponentTemplate<State, Query>(
      this.delayed,
      this._children
    )
  }
}
