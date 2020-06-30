import { BaseBuilder } from './base_builder'
import { IBuilder } from './ibuilder'
import { FragmentTemplate } from '../impl/fragment'

export class FragmentBuilder<State, Action, Query>
  extends BaseBuilder<State, Action, Query>
  implements IBuilder<State, Action, Query> {
  build() {
    return new FragmentTemplate<State, Action, Query>(this._children)
  }
}
