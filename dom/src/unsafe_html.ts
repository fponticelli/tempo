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

import { DOMContext } from './context'
import { DerivedOrLiteralValue } from 'tempo-core/lib/value'
import { Lifecycle } from './lifecycle'

export function unsafeHtml<State, Action>(
  html: DerivedOrLiteralValue<State, string>
): (
  state: State,
  element: HTMLElement,
  ctx: DOMContext<Action>
) => Lifecycle<State> {
  return (state, element, ctx) => {
    if (typeof html === 'function') {
      element.innerHTML = html(state) ?? ''
      return {
        beforeChange() {},
        afterChange(state) {
          element.innerHTML = html(state) ?? ''
        },
        beforeDestroy() {}
      }
    } else {
      element.innerHTML = html
      return {
        beforeChange() {},
        afterChange() {},
        beforeDestroy() {}
      }
    }
  }
}
