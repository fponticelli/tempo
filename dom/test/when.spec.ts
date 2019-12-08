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
import { when, unless } from '../src/when'
import { createContext } from './common'

describe('when', () => {
  it('always true', () => {
    const ctx = createContext()
    const template = when({ condition: _ => true, refId: 'A' }, div({}, 'a'))
    const view = template.render(ctx, 1)
    expect(ctx.doc.body.innerHTML).toEqual('<div>a</div><!--A-->')
    view.change(2)
    expect(ctx.doc.body.innerHTML).toEqual('<div>a</div><!--A-->')
    view.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('always false', () => {
    const ctx = createContext()
    const template = when({ condition: _ => false }, div({}, 'a'))
    const view = template.render(ctx, 1)
    expect(ctx.doc.body.innerHTML).toEqual('<!--t:when-->')
    view.change(2)
    expect(ctx.doc.body.innerHTML).toEqual('<!--t:when-->')
    view.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('unless', () => {
    const ctx = createContext()
    const template = unless({ condition: _ => false }, div({}, 'a'))
    const view = template.render(ctx, 1)
    expect(ctx.doc.body.innerHTML).toEqual('<div>a</div><!--t:unless-->')
    view.change(2)
    expect(ctx.doc.body.innerHTML).toEqual('<div>a</div><!--t:unless-->')
    view.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('alternate start with true', () => {
    const ctx = createContext()
    let condition = true
    const template = when({ condition: _ => condition }, div({}, 'a'))
    const view = template.render(ctx, 1)
    expect(ctx.doc.body.innerHTML).toEqual('<div>a</div><!--t:when-->')
    condition = false
    view.change(2)
    expect(ctx.doc.body.innerHTML).toEqual('<!--t:when-->')
    condition = true
    view.change(3)
    expect(ctx.doc.body.innerHTML).toEqual('<div>a</div><!--t:when-->')
    view.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('alternate start with false', () => {
    const ctx = createContext()
    let condition = false
    const template = when({ condition: _ => condition }, div({}, 'a'))
    const view = template.render(ctx, 1)
    expect(ctx.doc.body.innerHTML).toEqual('<!--t:when-->')
    condition = true
    view.change(2)
    expect(ctx.doc.body.innerHTML).toEqual('<div>a</div><!--t:when-->')
    condition = false
    view.change(3)
    expect(ctx.doc.body.innerHTML).toEqual('<!--t:when-->')
    view.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })
})
