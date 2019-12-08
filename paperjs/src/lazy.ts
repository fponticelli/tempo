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
import { PaperContext } from './context'
import { PaperTemplate } from './template'

export class PaperLazyTemplate<State, Action, Query> implements PaperTemplate<State, Action, Query> {
  constructor(
    readonly f: () => PaperTemplate<State, Action, Query>
  ) {}

  render(ctx: PaperContext<Action>, state: State): View<State, Query> {
    const template = this.f()
    return template.render(ctx, state)
  }
}

export const lazy = <State, Action, Query = unknown>(
  f: () => PaperTemplate<State, Action, Query>
): PaperTemplate<State, Action, Query> => new PaperLazyTemplate<State, Action, Query>(f)
