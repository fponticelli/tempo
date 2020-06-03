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

import { el } from '../src/element'
import { mapState, mapAction } from '../src/map'
import { createContext } from './common'

describe('map', () => {
  it('mapState', () => {
    const template = el(
      'div',
      {},
      mapState({ map: (v: number) => `#${v}` }, s => s)
    )
    const ctx = createContext()
    const view = template.render(ctx, 1)
    expect(ctx.doc.body.innerHTML).toEqual('<div>#1</div>')
    view.change(2)
    expect(ctx.doc.body.innerHTML).toEqual('<div>#2</div>')
  })

  it('mapState only static', () => {
    const template = el(
      'div',
      {},
      mapState({ map: (v: number) => `#${v}` }, 'X')
    )
    const ctx = createContext()
    template.render(ctx, 1)
    expect(ctx.doc.body.innerHTML).toEqual('<div>X</div>')
  })

  it('mapAction', () => {
    let ref: string | undefined
    const click = (): number => 1
    const template = el<string, string, HTMLDivElement>(
      'div',
      {},
      mapAction(
        { map: (v: number) => `#${v}` },
        el<string, number, HTMLDivElement>('div', { events: { click } }, s => s)
      )
    )
    const ctx = createContext((n: string) => {
      ref = n
    })
    const view = template.render(ctx, 'A')
    expect(ctx.doc.body.innerHTML).toEqual('<div><div>A</div></div>')
    const domEl = ctx.doc.body.firstElementChild!
      .firstElementChild! as HTMLDivElement
    domEl.click()
    expect(ref).toEqual('#1')
    view.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('mapAction passing undefined', () => {
    let ref = 'ORIG'
    const click = (): string => 'X'
    const template = el<string, string, HTMLDivElement>(
      'div',
      {},
      mapAction(
        { map: (v: string): string | undefined => undefined },
        el<string, string, HTMLDivElement>('div', { events: { click } }, s => s)
      )
    )
    const ctx = createContext((n: string) => {
      ref = n
    })
    const view = template.render(ctx, 'A')
    expect(ctx.doc.body.innerHTML).toEqual('<div><div>A</div></div>')
    const domEl = ctx.doc.body.firstElementChild!
      .firstElementChild! as HTMLDivElement
    domEl.click()
    expect(ref).toEqual('ORIG')
    view.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('mapAction only static', () => {
    let ref: string | undefined
    const click = (): number => 1
    const template = el<string, string, HTMLDivElement>(
      'div',
      {},
      mapAction(
        { map: (v: number) => `#${v}` },
        el<string, number, HTMLDivElement>('div', { events: { click } }, 'X')
      )
    )
    const ctx = createContext((n: string) => {
      ref = n
    })
    const view = template.render(ctx, 'A')
    expect(ctx.doc.body.innerHTML).toEqual('<div><div>X</div></div>')
    const domEl = ctx.doc.body.firstElementChild!
      .firstElementChild! as HTMLDivElement
    domEl.click()
    expect(ref).toEqual('#1')
    view.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })
})
