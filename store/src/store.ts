/*
Copyright 2019 Google LLC
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

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
    return new Store(
      new Property(options.state, options.equal),
      options.reducer
    )
  }

  readonly observable: Observable3<State, Action, boolean>

  constructor(
    readonly property: Property<State>,
    private readonly reducer: Reducer<State, Action>
  ) {
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
