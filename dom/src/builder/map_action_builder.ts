import { BaseBuilder, IBuilder } from './internal'
import { DerivedValue } from 'tempo-core/lib/value'
import { MapActionTemplate } from '../impl/map_action'

export class MapActionBuilder<State, Action, ActionB, Query>
  extends BaseBuilder<State, ActionB, Query>
  implements IBuilder<State, Action, Query> {
  constructor(protected map: DerivedValue<ActionB, Action>) {
    super()
  }
  build() {
    return new MapActionTemplate<State, Action, ActionB, Query>(
      this.map,
      this._children
    )
  }
}
