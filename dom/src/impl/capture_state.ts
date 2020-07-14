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

import { DOMTemplate } from '../template'
import { DOMContext } from '../context'
import { FragmentHTMLBuilder } from './html_builder'

export type StateHook<T> = () => T

export class CaptureStateTemplate<State, Action, Query>
  implements DOMTemplate<State, Action, Query> {
  constructor(
    readonly capture: (
      hook: StateHook<State>,
      builder: FragmentHTMLBuilder<State, Action, Query>
    ) => void
  ) {}
  render(ctx: DOMContext<Action>, state: State) {
    let localState = state
    const builder = new FragmentHTMLBuilder<State, Action, Query>()
    const hook = () => localState
    this.capture(hook, builder)
    const template = builder.build()

    const view = template.render(ctx, localState)
    return {
      change(state: State) {
        localState = state
        view.change(localState)
      },
      request(query: Query) {
        view.request(query)
      },
      destroy() {
        view.destroy()
      }
    }
  }
}
