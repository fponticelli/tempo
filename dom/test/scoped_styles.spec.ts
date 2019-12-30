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
import { scopedStyles } from '../src/scoped_styles'
import { DOMContext } from '../src/context'
import { DOMChild } from '../src/template'

const renderEl = <State>(ctx: DOMContext<unknown>) => (state: State, ...children: DOMChild<State, unknown, unknown>[]) => el('div', {}, ...children).render(ctx, state)

describe('scoped_styles', () => {
  it('static style', () => {
    const ctx = createContext()
    const view = renderEl(ctx)(1, scopedStyles(
      { scope: 'my-styles' },
      {
        ':scope': {
          border: '2px solid red'
        }
      })
    )
    expect(ctx.doc.head.innerHTML).toEqual(`<style name="my-styles">
[my-styles] {
  border: 2px solid red;
}
</style>`)
    view.destroy()
    expect(ctx.doc.head.innerHTML).toEqual('')
  })

  it('element has scope attribute', () => {
    const ctx = createContext()
    const view = renderEl(ctx)(1, scopedStyles(
      { scope: 'my-styles' },
      {
        ':scope': {
          border: '2px solid red'
        }
      })
    )
    expect(ctx.doc.body.innerHTML).toEqual(`<div my-styles=""></div>`)
    view.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('dynamic style', () => {
    const ctx = createContext()
    const view = renderEl(ctx)(1, scopedStyles(
      { scope: 'my-styles' },
      {
        ':scope': {
          border: state => `${state}px solid blue`
        }
      })
    )

    expect(ctx.doc.head.innerHTML).toEqual(`<style>
[my-styles] {
  border: 1px solid blue;
}
</style>`)

    view.change(3)

    expect(ctx.doc.head.innerHTML).toEqual(`<style>
[my-styles] {
  border: 3px solid blue;
}
</style>`)

    view.destroy()
    expect(ctx.doc.head.innerHTML).toEqual('')
  })

  it('static & dynamic style', () => {
    const ctx = createContext()
    const view = renderEl(ctx)(1, scopedStyles(
      { scope: 'my-styles' },
      {
        ':scope': {
          'background-color': 'red',
          border: state => `${state}px solid blue`
        }
      })
    )

    expect(ctx.doc.head.innerHTML).toEqual(`<style name="my-styles">
[my-styles] {
  background-color: red;
}
</style><style>
[my-styles] {
  border: 1px solid blue;
}
</style>`)

    view.change(3)

    expect(ctx.doc.head.innerHTML).toEqual(`<style name="my-styles">
[my-styles] {
  background-color: red;
}
</style><style>
[my-styles] {
  border: 3px solid blue;
}
</style>`)

    view.destroy()
    expect(ctx.doc.head.innerHTML).toEqual('')
  })

  it('do not rerender same static style', () => {
    const ctx = createContext()
    const view = renderEl(ctx)(
      1,
      scopedStyles(
        { scope: 'my-styles' },
        {
          ':scope': {
            border: '2px solid red'
          }
        }
      ),
      scopedStyles(
        { scope: 'my-styles' },
        {
          ':scope': {
            border: '2px solid red'
          }
        }
      )
    )
    expect(ctx.doc.head.innerHTML).toEqual(`<style name="my-styles">
[my-styles] {
  border: 2px solid red;
}
</style>`)
    view.destroy()
    expect(ctx.doc.head.innerHTML).toEqual('')
  })
})
