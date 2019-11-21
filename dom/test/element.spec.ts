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
import { el } from '../src/element'
import { DynamicView } from '@tempo/core/lib/view'
import { div, span, a } from '../src/html'

describe('dom_element', () => {
  it('static empty-element', () => {
    const ctx = createContext()
    const nodeUndefined = el('div', {}).render(ctx, 1)
    expect(ctx.doc.body.innerHTML).toEqual('<div></div>')
    nodeUndefined.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('static nested-element', () => {
    const ctx = createContext()
    const nodeUndefined = el('div', {}, el('a', {}, el('span', {}, 'abc'))).render(ctx, 1)
    expect(ctx.doc.body.innerHTML).toEqual('<div><a><span>abc</span></a></div>')
    nodeUndefined.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('static attribute', () => {
    const ctx = createContext()
    const node = el('div', { attrs: { id: 'main' } }).render(ctx, 1)
    expect(ctx.doc.body.innerHTML).toEqual('<div id="main"></div>')
    node.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('dynamic attribute', () => {
    const ctx = createContext()
    const node = el('div', {
      attrs: { id: (v: string) => (v !== 'X' ? v : undefined) }
    }).render(ctx, 'abc') as DynamicView<string | undefined>
    expect(ctx.doc.body.innerHTML).toEqual('<div id="abc"></div>')
    node.change('xyz')
    expect(ctx.doc.body.innerHTML).toEqual('<div id="xyz"></div>')
    node.change('X')
    expect(ctx.doc.body.innerHTML).toEqual('<div></div>')
    node.change(undefined)
    expect(ctx.doc.body.innerHTML).toEqual('<div></div>')
    node.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('dynamic child', () => {
    const ctx = createContext()
    const node = el('div', { attrs: { id: (v: string) => v } }, el('a', { attrs: { href: (v: string) => v && `#${v}` } })).render(
      ctx,
      'abc'
    ) as DynamicView<string | undefined>
    expect(ctx.doc.body.innerHTML).toEqual('<div id="abc"><a href="#abc"></a></div>')
    node.change('xyz')
    expect(ctx.doc.body.innerHTML).toEqual('<div id="xyz"><a href="#xyz"></a></div>')
    node.change(undefined)
    expect(ctx.doc.body.innerHTML).toEqual('<div><a></a></div>')
    node.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('static $style', () => {
    const ctx = createContext()
    const node = el('div', { styles: { color: 'red' } }).render(ctx, 1)
    expect(ctx.doc.body.innerHTML).toEqual('<div style="color: red;"></div>')
    node.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('dynamic $style', () => {
    const ctx = createContext()
    const node = el('div', { styles: { color: (v: number | undefined) => (v && (v === 1 ? 'red' : 'blue')) || undefined } }).render(
      ctx,
      1
    ) as DynamicView<number | undefined>
    expect(ctx.doc.body.innerHTML).toEqual('<div style="color: red;"></div>')
    node.change(2)
    expect(ctx.doc.body.innerHTML).toEqual('<div style="color: blue;"></div>')
    node.change(undefined)
    expect(ctx.doc.body.innerHTML).toEqual('<div style=""></div>')
    node.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('event that dispatch', () => {
    const ctx = createContext((c: number) => {
      count += c
    })
    let count = 0
    const click = (state: number, e: MouseEvent, el: Element) => 1
    const node = el<number, number, HTMLDivElement>('div', { events: { click } }).render(ctx, 1)
    expect(ctx.doc.body.innerHTML).toEqual('<div></div>')
    const domEl = ctx.doc.body.firstElementChild as HTMLDivElement
    expect(count).toEqual(0)
    domEl.click()
    expect(count).toEqual(1)
    domEl.click()
    expect(count).toEqual(2)
    node.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it("handle event that doesn't dispatch", () => {
    const ctx = createContext((c: number) => {
      count = c
    })
    let count = 0
    const click = () => undefined
    const node = el<number, number, HTMLDivElement>('div', { events: { click } }).render(ctx, 1)
    expect(ctx.doc.body.innerHTML).toEqual('<div></div>')
    const domEl = ctx.doc.body.firstElementChild as HTMLDivElement
    expect(count).toEqual(0)
    domEl.click()
    expect(count).toEqual(0)
    node.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('handle event that dispatch', () => {
    const ctx = createContext((c: number) => {
      count = c
    })
    let count = 0
    const click = (state: number, e: MouseEvent, el: Element) =>  state + 1
    const node = el<number, number, HTMLDivElement>('div', { events: { click } }).render(ctx, 1)
    expect(ctx.doc.body.innerHTML).toEqual('<div></div>')
    const domEl = ctx.doc.body.firstElementChild as HTMLDivElement
    expect(count).toEqual(0)
    domEl.click()
    expect(count).toEqual(2)
    node.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('handle event conditionally on state', () => {
    const ctx = createContext((c: number) => {
      count = c
    })
    let count = 0
    const click = (state: number, e: MouseEvent, el: Element) => state + 1
    const node = el<number, number, HTMLDivElement>('div', { events: { click } }).render(ctx, 1)
    expect(ctx.doc.body.innerHTML).toEqual('<div></div>')
    const domEl = ctx.doc.body.firstElementChild as HTMLDivElement
    expect(count).toEqual(0)
    domEl.click()
    expect(count).toEqual(2)
    node.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('event that does not dispatch', () => {
    const ctx = createContext((c: number) => {
      count = c
    })
    let count = 0
    const click = () => undefined
    const node = el<number, number, HTMLDivElement>('div', { events: { click } }).render(ctx, 1)
    const domEl = ctx.doc.body.firstElementChild as HTMLDivElement
    expect(count).toEqual(0)
    domEl.click()
    expect(count).toEqual(0)
    node.destroy()
  })

  it('generated elements', () => {
    const template = div({}, span({}, 'hello ', a({ attrs: { href: '#you' } }, s => `#${s}`)))
    const ctx = createContext()
    template.render(ctx, 1)
    expect(ctx.doc.body.innerHTML).toEqual('<div><span>hello <a href="#you">#1</a></span></div>')
  })

  it('generated elements with style', () => {
    const template = div({ styles: { 'background-color': 'rgb(200, 200, 200)' } }, 'hello')
    const ctx = createContext()
    template.render(ctx, 1)
    expect(ctx.doc.body.innerHTML).toEqual('<div style="background-color: rgb(200, 200, 200);">hello</div>')
  })

  it('respect lifecycle sequence', () => {
    const ctx = createContext()
    const sequence = [] as string[]
    const template = div<string, unknown>({
      afterrender: el => sequence.push('afterrender'),
      beforechange: el => sequence.push('beforechange'),
      afterchange: el => sequence.push('afterchange'),
      beforedestroy: () => sequence.push('beforedestroy')
    })
    const view = template.render(ctx, 'A') as DynamicView<string>
    expect(sequence).toEqual(['afterrender'])
    view.change('B')
    expect(sequence).toEqual(['afterrender', 'beforechange', 'afterchange'])
    view.destroy()
    expect(sequence).toEqual(['afterrender', 'beforechange', 'afterchange', 'beforedestroy'])
  })

  it('respect lifecycle sequence with derived', () => {
    const ctx = createContext()
    const sequence = [] as string[]
    const template = div<string, unknown, number>({
        afterrender: (state, el, ctx) => {
          expect(ctx).not.toBeUndefined()
          sequence.push(`AR:${state}:${el.tagName}`)
          return 1
        },
        beforechange: (state, el, ctx, value) => {
          expect(value).toBe(1)
          expect(ctx).not.toBeUndefined()
          sequence.push(`BC:${state}:${el.tagName}`)
          return 2
        },
        afterchange: (state, el, ctx, value) => {
          expect(value).toBe(2)
          expect(ctx).not.toBeUndefined()
          sequence.push(`AC:${state}:${el.tagName}`)
          return 3
        },
        beforedestroy: (el: HTMLDivElement, ctx, value) => {
          expect(value).toBe(3)
          expect(ctx).not.toBeUndefined()
          sequence.push('BD')
          sequence.push(String(el !== undefined))
        }
      })
    const view = template.render(ctx, 'A') as DynamicView<string>
    expect(sequence).toEqual(['AR:A:DIV'])
    view.change('B')
    expect(sequence).toEqual(['AR:A:DIV', 'BC:B:DIV', 'AC:B:DIV'])
    view.destroy()
    expect(sequence).toEqual(['AR:A:DIV', 'BC:B:DIV', 'AC:B:DIV', 'BD', 'true'])
  })
})
