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

import { createContext as createCtx } from './common'
import { el } from '../src/element'
import { scopedStyles, resetCache } from '../src/scoped_styles'
import { when } from '../src/when'
import { forEach } from '../src/for_each'
import { DOMContext } from '../src/context'
import { DOMChild } from '../src/template'

const renderEl = <State>(ctx: DOMContext<unknown>) => (state: State, ...children: DOMChild<State, unknown, unknown>[]) => el('div', {}, ...children).render(ctx, state)

const createContext = () => {
  resetCache()
  return createCtx()
}

const literalScoped = scopedStyles<number, unknown, unknown>(
  { ':scope': { border: '2px solid red' } }
)

const derivedScoped = scopedStyles<number, unknown, unknown>(
  { ':scope': { border: (state: number) => `${state}px solid blue` } }
)

describe('scoped_styles', () => {
  it('literal style', () => {
    const ctx = createContext()
    const view = renderEl<number>(ctx)(1, literalScoped)
    expect(ctx.doc.head.innerHTML).toEqual(`<style data-tedef-lit="1">
[data-tescope-lit=1] {
  border: 2px solid red;
}
</style>`)
    view.destroy()
    expect(ctx.doc.head.innerHTML).toEqual('')
  })

  it('element has literal scope attribute', () => {
    const ctx = createContext()
    const view = renderEl<number>(ctx)(1, literalScoped)
    expect(ctx.doc.body.innerHTML).toEqual(`<div data-tescope-lit="1"></div>`)
    view.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('element has dynamic scope attribute', () => {
    const ctx = createContext()
    const view = renderEl<number>(ctx)(1, derivedScoped)
    expect(ctx.doc.body.innerHTML).toEqual(`<div data-tescope-der="1"></div>`)
    view.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('dynamic style', () => {
    const ctx = createContext()
    const view = renderEl<number>(ctx)(1, derivedScoped)

    expect(ctx.doc.head.innerHTML).toEqual(`<style data-tedef-der="1">
[data-tescope-der=1] {
  border: 1px solid blue;
}
</style>`)

    view.change(3)

    expect(ctx.doc.head.innerHTML).toEqual(`<style data-tedef-der="2">
[data-tescope-der=2] {
  border: 3px solid blue;
}
</style>`)

    view.destroy()
    expect(ctx.doc.head.innerHTML).toEqual('')
  })

  it('literal & dynamic style', () => {
    const ctx = createContext()
    const view = renderEl(ctx)(1, scopedStyles(
      {
        ':scope': {
          'background-color': 'red',
          border: state => `${state}px solid blue`
        }
      })
    )

    expect(ctx.doc.head.innerHTML).toEqual(`<style data-tedef-lit="1">
[data-tescope-lit=1] {
  background-color: red;
}
</style><style data-tedef-der="2">
[data-tescope-der=2] {
  border: 1px solid blue;
}
</style>`)

    view.change(3)

    expect(ctx.doc.head.innerHTML).toEqual(`<style data-tedef-lit="1">
[data-tescope-lit=1] {
  background-color: red;
}
</style><style data-tedef-der="3">
[data-tescope-der=3] {
  border: 3px solid blue;
}
</style>`)

    view.destroy()
    expect(ctx.doc.head.innerHTML).toEqual('')
  })

  it('do not rerender same literal style', () => {
    const ctx = createContext()
    const view = renderEl(ctx)(
      1,
      scopedStyles(
        { ':scope': { border: '2px solid red' } }
      ),
      scopedStyles(
        { ':scope': { border: '2px solid red' } }
      )
    )
    expect(ctx.doc.head.innerHTML).toEqual(`<style data-tedef-lit="1">
[data-tescope-lit=1] {
  border: 2px solid red;
}
</style>`)
    view.destroy()
    expect(ctx.doc.head.innerHTML).toEqual('')
  })

  it('removing first should not impact second', () => {
    const ctx = createContext()
    const view = renderEl<number>(ctx)(
      0,
      when<number, unknown, unknown>(
        { condition: (state: number) => state % 2 === 0},
        el<number, unknown, unknown>('div', {}, literalScoped)
      ),
      when(
        { condition: (state: number) => state === 1},
        el<number, unknown, unknown>('div', {}, literalScoped)
      ),
    )

    expect(ctx.doc.head.innerHTML).toEqual(`<style data-tedef-lit="1">
[data-tescope-lit=1] {
  border: 2px solid red;
}
</style>`)

    view.change(1)

    expect(ctx.doc.head.innerHTML).toEqual(`<style data-tedef-lit="2">
[data-tescope-lit=2] {
  border: 2px solid red;
}
</style>`)

    view.change(2)

    expect(ctx.doc.head.innerHTML).toEqual(`<style data-tedef-lit="2">
[data-tescope-lit=2] {
  border: 2px solid red;
}
</style>`)

    view.change(3)

    expect(ctx.doc.head.innerHTML).toEqual('')

    view.destroy()

    expect(ctx.doc.head.innerHTML).toEqual('')
  })

  it('different derived values for dynamic should produce multiple style elements', () => {
    const ctx = createContext()
    const view = renderEl<number[]>(ctx)(
      [1, 2, 3],
      forEach(
        {},
        el(
          'div',
          {},
          scopedStyles({ ':scope': { border: state => `${state}px solid blue` } })
        )
      )
    )

    expect(ctx.doc.head.innerHTML).toEqual(`<style data-tedef-der="1">
[data-tescope-der=1] {
  border: 1px solid blue;
}
</style><style data-tedef-der="2">
[data-tescope-der=2] {
  border: 2px solid blue;
}
</style><style data-tedef-der="3">
[data-tescope-der=3] {
  border: 3px solid blue;
}
</style>`)

    view.change([4])

    expect(ctx.doc.head.innerHTML).toEqual(`<style data-tedef-der="4">
[data-tescope-der=4] {
  border: 4px solid blue;
}
</style>`)
  })

  it('no same dynamics should produce more than one style element', () => {
    const ctx = createContext()
    const view = renderEl<number[]>(ctx)(
      [1, 2, 3],
      forEach(
        {},
        el(
          'div',
          {},
          scopedStyles({ ':scope': { border: state => `7px solid blue` } })
        )
      )
    )

    expect(ctx.doc.head.innerHTML).toEqual(`<style data-tedef-der="1">
[data-tescope-der=1] {
  border: 7px solid blue;
}
</style>`)

    view.change([4])

    expect(ctx.doc.head.innerHTML).toEqual(`<style data-tedef-der="1">
[data-tescope-der=1] {
  border: 7px solid blue;
}
</style>`)

    view.change([])

    expect(ctx.doc.head.innerHTML).toEqual(``)
  })
})
