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
import { Component, Adapter } from '../src/html'
import { PropagateArg } from '../src/impl/adapter'

describe('adapter', () => {
  it('noOptions', () => {
    type InnerState = { inner: string; outer: string }

    const ctx = createContext(() => {})
    const reducer = (state: InnerState) => state
    const template = Adapter<
      { outer: string },
      InnerState,
      unknown,
      unknown,
      unknown
    >({
      bootstrapState: outer => ({ inner: 'in', outer: 'out' }),
      child: Component(reducer, $ =>
        $.text('inner: ')
          .text(s => s.inner)
          .text(', outer: ')
          .text(s => s.outer)
      ).build()
    })
    const view = template.render(ctx, { outer: 'out' })
    expect(ctx.doc.body.innerHTML).toEqual('inner: in, outer: out')
    view.change({ outer: 'OUT' })
    expect(ctx.doc.body.innerHTML).toEqual('inner: in, outer: out')
    view.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('mergeStates', () => {
    type OuterState = { outer: string }
    type InnerState = { inner: string; outer: string }

    const reducer = (state: InnerState) => state
    const ctx = createContext(() => {})
    const template = Adapter<OuterState, InnerState, unknown, unknown, unknown>(
      {
        bootstrapState: () => ({ inner: 'in', outer: '' }),
        mergeStates: ({
          outerState,
          innerState
        }: {
          outerState: OuterState
          innerState: InnerState
        }) => {
          return { ...outerState, inner: innerState.inner }
        },
        child: Component(reducer, $ =>
          $.text('inner: ')
            .text(s => s.inner)
            .text(', outer: ')
            .text(s => s.outer)
        ).build()
      }
    )
    const view = template.render(ctx, { outer: 'out' })
    expect(ctx.doc.body.innerHTML).toEqual('inner: in, outer: out')
    view.change({ outer: 'OUT' })
    expect(ctx.doc.body.innerHTML).toEqual('inner: in, outer: OUT')
  })

  // TODO this test is almost impossible to follow and understand
  it('propagate', () => {
    // const state = ['inner-state'] as string[]
    const reducer = (s: string[], a: string) => {
      if (a === 'inner-action') {
        didCallInnerDispatcher = true
        return s.concat([a])
      } else {
        return s.concat([a])
      }
    }

    const comp = Component<string[], string, unknown>(reducer, $ =>
      $.DIV($ =>
        $.onClick((_s: string[], _: Event) => 'click').text(s => s.join(', '))
      )
    ).build()

    let didCallPropagate = false
    let didCallOuterDispatcher = false
    let didCallInnerDispatcher = false

    const propagate = (
      args: PropagateArg<string, string[], string, string>
    ) => {
      // dispatch it only once
      if (args.action === 'click') {
        didCallPropagate = true
        expect(args.innerState).toEqual(['inner-state', 'outer-state', 'click'])
        args.dispatchInner('inner-action')
      } else if (args.action === 'inner-action') {
        args.dispatchOuter('outer-action')
        expect(args.innerState).toEqual([
          'inner-state',
          'outer-state',
          'click',
          'inner-action'
        ])
        expect(args.outerState).toBe('outer-state')
      }
    }

    const mergeStates = ({
      outerState,
      innerState
    }: {
      outerState: string
      innerState: string[]
    }) => innerState.concat([outerState])

    const adapt = Adapter<string, string[], string, string, unknown>({
      bootstrapState: () => ['inner-state'],
      propagate,
      mergeStates,
      child: comp
    })

    const ctx = createContext((a: string) => {
      expect(a).toBe('outer-action')
      didCallOuterDispatcher = true
    })

    adapt.render(ctx, 'outer-state')

    expect(ctx.doc.body.innerHTML).toEqual(
      '<div>inner-state, outer-state</div>'
    )

    const el = ctx.doc.body.firstElementChild as HTMLDivElement
    el.click()
    expect(didCallPropagate).toBeTruthy()
    expect(didCallOuterDispatcher).toBeTruthy()
    expect(didCallInnerDispatcher).toBeTruthy()
    expect(ctx.doc.body.innerHTML).toEqual(
      '<div>inner-state, outer-state, click, inner-action</div>'
    )
  })
})
