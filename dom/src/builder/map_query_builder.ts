import { BaseBuilder } from './base_builder'
import { IBuilder } from './ibuilder'
import { DerivedValue } from 'tempo-core/lib/value'
import { MapQueryTemplate } from '../impl/map_query'

export class MapQueryBuilder<State, Action, Query, QueryB>
  extends BaseBuilder<State, Action, QueryB>
  implements IBuilder<State, Action, Query> {
  constructor(protected map: DerivedValue<Query, QueryB>) {
    super()
  }
  build() {
    return new MapQueryTemplate<State, Action, Query, QueryB>(
      this.map,
      this._children
    )
  }
}
