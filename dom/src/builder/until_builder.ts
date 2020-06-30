import { BaseBuilder } from './base_builder'
import { IBuilder } from './ibuilder'
import { UntilTemplate } from '../impl/until'
import { DerivedOrLiteralValue } from 'tempo-core/lib/value'

export class UntilBuilder<State, StateB, Action, Query>
  extends BaseBuilder<StateB, Action, Query>
  implements IBuilder<State, Action, Query> {
  constructor(
    readonly next: DerivedOrLiteralValue<
      { state: State; index: number },
      StateB
    >
  ) {
    super()
  }
  build() {
    return new UntilTemplate<State, StateB, Action, Query>(
      this.next,
      this._children
    )
  }
}
