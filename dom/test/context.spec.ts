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

import { DOMContext } from '../src/context'
import { createContext, getWindow } from './common'

describe('context', () => {
  it('fromElements sets-up the right defaults', () => {
    const { document } = getWindow()
    const el = document.createElement('div')
    document.body.append(el)
    const ctx = DOMContext.fromElement(el, () => {})
    expect(ctx.doc).toBe(document)
    expect(ctx.parent).toBe(el)
    const sub = document.createElement('p')
    ctx.append(sub)
    expect(document.body.innerHTML).toBe('<div><p></p></div>')
  })

  it('mapAction trigger dispatch with the right value', () => {
    let grabber: any[] = []
    function fa(action: string) {
      grabber.push(action)
    }
    const ctx = createContext(fa)
    ctx.dispatch('a')
    expect(grabber).toEqual(['a'])
    const newCtx = ctx.mapAction(String)
    newCtx.dispatch(1)
    expect(grabber).toEqual(['a', '1'])
  })
})
