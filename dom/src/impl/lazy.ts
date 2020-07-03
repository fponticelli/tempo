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

import { View } from 'tempo-core/lib/view'
import { DOMContext } from '../context'
import { DOMTemplate } from '../template'
import { IBuilder, childOrBuilderToTemplate } from './builder'

export class LazyTemplate<State, Action, Query>
  implements DOMTemplate<State, Action, Query> {
  constructor(
    readonly f: () =>
      | DOMTemplate<State, Action, Query>
      | IBuilder<State, Action, Query>
  ) {}

  private template: DOMTemplate<State, Action, Query> | undefined
  render(ctx: DOMContext<Action>, state: State): View<State, Query> {
    if (this.template === undefined) {
      this.template = childOrBuilderToTemplate(this.f())
    }
    return this.template.render(ctx, state)
  }
}
