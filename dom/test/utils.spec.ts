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

import { removeNode, insertFBefore } from '../src/impl/dom'
import { createContext } from './common'

describe('utils', () => {
  it('removeNode odd scenarios', () => {
    expect(removeNode(undefined as any)).toBeUndefined()
    expect(removeNode({} as any)).toBeUndefined()
  })

  it("element blur doesn't prevent node removal", () => {
    const ctx = createContext()
    const input = ctx.doc.createElement('input')
    let triggered = 0
    ctx.doc.body.appendChild(input)
    input.onblur = (e: FocusEvent) => ++triggered
    input.focus()
    input.blur()
    removeNode(input)
    expect(triggered).toEqual(1)
  })

  it('insertFBefore', () => {
    const ctx = createContext()
    const div0 = ctx.doc.createElement('div')
    div0.innerHTML = '0'
    const div1 = ctx.doc.createElement('div')
    div1.innerHTML = '1'
    const div2 = ctx.doc.createElement('div')
    div2.innerHTML = '2'
    insertFBefore(div1)(div0) // this will not insert
    ctx.doc.body.appendChild(div2)
    insertFBefore(div2)(div1)
    expect(ctx.doc.body.innerHTML).toEqual('<div>1</div><div>2</div>')
  })
})
