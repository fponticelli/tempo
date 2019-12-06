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
import { DOMContext } from './context'
import { DOMTemplate } from './template'

export class DOMLazyTemplate<State, Query, Action> implements DOMTemplate<State, Query, Action> {
  constructor(
    readonly f: () => DOMTemplate<State, Query, Action>
  ) {}

  render(ctx: DOMContext<Action>, state: State): View<State, Query> {
    const template = this.f()
    return template.render(ctx, state)
  }
}

export const lazy = <State, Query, Action>(
  f: () => DOMTemplate<State, Query, Action>
): DOMTemplate<State, Query, Action> => new DOMLazyTemplate<State, Query, Action>(f)
