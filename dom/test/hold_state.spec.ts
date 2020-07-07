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

import { createContext } from './common'
import { HoldState, DIV } from '../src/html'

describe('hold state', () => {
  it('can render and update state', () => {
    const ctx = createContext()
    const template = HoldState<
      string,
      number,
      [string, number],
      unknown,
      unknown
    >(Release =>
      DIV($ =>
        $.MapState(
          s => s.length,
          $ =>
            $.Append(
              Release(
                (state, inner) => [state, inner],
                $ =>
                  $.SPAN($ => $.text(([state, inner]) => `${state},${inner}`))
              )
            )
        )
      )
    )
    const view = template.render(ctx, 'outside')
    expect(ctx.doc.body.innerHTML).toEqual('<div><span>outside,7</span></div>')
    view.change('new text')
    expect(ctx.doc.body.innerHTML).toEqual('<div><span>new text,8</span></div>')
    view.change('again')
    expect(ctx.doc.body.innerHTML).toEqual('<div><span>again,5</span></div>')
  })
})
