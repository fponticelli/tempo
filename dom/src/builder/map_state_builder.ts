import { BaseBuilder } from './base_builder'
import { Attribute } from '../value'
import { MapStateTemplate } from '../map'
import { DOMChild } from '../template'
import { IBuilder, childOrBuilderToTemplate } from './ibuilder'

export class MapStateBuilder<State, StateB, Action, Query>
  extends BaseBuilder<StateB, Action, Query>
  implements IBuilder<State, Action, Query> {
  public whenUndefined:
    | DOMChild<State, Action, Query>
    | IBuilder<State, Action, Query>
    | undefined
  public equals: (a: StateB, b: StateB) => boolean = (a, b) => a === b
  constructor(protected map: Attribute<State, StateB>) {
    super()
  }
  build() {
    return new MapStateTemplate<State, StateB, Action, Query>(
      this.map,
      childOrBuilderToTemplate(this.whenUndefined),
      this.equals,
      this._children
    )
  }
}
