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

import { div } from '../src/html'
import { component } from '../src/component'
import { text } from '../src/text'
import { createContext } from './common'
import { Store } from 'tempo-store/lib/store'
import { Property } from 'tempo-store/lib/property'

describe('component', () => {
  it('fromElements sets-up the right defaults', () => {
    const ctx = createContext()
    const store = new Store(
      new Property(1),
      (state: number, action: number) => action
    )

    const node = component(
      { store },
      div({}, text(String))
    ).render(ctx, 2)
    expect(ctx.doc.body.innerHTML).toEqual('<div>2</div>')
    node.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })
})
