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

import { When, Unless } from '../src/html'
import { createContext } from './common'

describe('when', () => {
  it('always true', () => {
    const ctx = createContext()
    const template = When(
      _ => true,
      $ => $.DIV($ => $.text('a'))
    ).build()
    const view = template.render(ctx, 1)
    expect(ctx.doc.body.innerHTML).toEqual('<div>a</div>')
    view.change(2)
    expect(ctx.doc.body.innerHTML).toEqual('<div>a</div>')
    view.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('always false', () => {
    const ctx = createContext()
    const template = When(
      _ => false,
      $ => $.DIV($ => $.text('a'))
    ).build()
    const view = template.render(ctx, 1)
    expect(ctx.doc.body.innerHTML).toEqual('')
    view.change(2)
    expect(ctx.doc.body.innerHTML).toEqual('')
    view.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('unless', () => {
    const ctx = createContext()
    const template = Unless(
      _ => false,
      $ => $.DIV($ => $.text('a'))
    ).build()
    const view = template.render(ctx, 1)
    expect(ctx.doc.body.innerHTML).toEqual('<div>a</div>')
    view.change(2)
    expect(ctx.doc.body.innerHTML).toEqual('<div>a</div>')
    view.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('alternate start with true', () => {
    const ctx = createContext()
    let condition = true
    const template = When(
      _ => condition,
      $ => $.DIV($ => $.text('a'))
    ).build()
    const view = template.render(ctx, 1)
    expect(ctx.doc.body.innerHTML).toEqual('<div>a</div>')
    condition = false
    view.change(2)
    expect(ctx.doc.body.innerHTML).toEqual('')
    condition = true
    view.change(3)
    expect(ctx.doc.body.innerHTML).toEqual('<div>a</div>')
    view.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('alternate start with false', () => {
    const ctx = createContext()
    let condition = false
    const template = When(
      _ => condition,
      $ => $.DIV($ => $.text('a'))
    ).build()
    const view = template.render(ctx, 1)
    expect(ctx.doc.body.innerHTML).toEqual('')
    condition = true
    view.change(2)
    expect(ctx.doc.body.innerHTML).toEqual('<div>a</div>')
    condition = false
    view.change(3)
    expect(ctx.doc.body.innerHTML).toEqual('')
    view.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })
})
