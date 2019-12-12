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

import { Tempo } from 'tempo-dom/lib/tempo'
import { main, li, span, a, article, section, header, ul, div, button } from 'tempo-dom/lib/html'
import { iterate } from 'tempo-dom/lib/iterate'
import { containerSize } from 'tempo-dom/lib/utils/dom'
import { matchBool } from 'tempo-dom/lib/match'
import { matchKind } from 'tempo-paper/lib/match'
import { mapState } from 'tempo-dom/lib/map'
import { createState, State, Example, CanvasState } from './state'
import { Action } from './action'
import { Query } from './query'
import { Store } from 'tempo-store/lib/store'
import { reduceOnKind } from 'tempo-store/lib/reducer'
import { project } from 'tempo-paper/lib/project'
import { Size } from 'paper'
import { makeMiddleware } from './middleware'
import { template as circleTemplate } from './circle/main'
import { template as pathSimplificationTemplate } from './path_simplification/main'

const state = createState()

const reducer = reduceOnKind<State, Action>({
  ChangeSample: (state, action) => ({
    ...state,
    selected: action.sample
  }),
  SetMainAreaSize: (state, action) => ({
    ...state,
    mainAreaSize: action.size
  }),
  ExportPNG: state => state,
  ExportSVG: state => state
})

const store = Store.ofState({ state, reducer })

const template = article<State, Action, Query>(
  { attrs: { className: 'app' } },
  header(
    { attrs: { class: 'header' } },
    'header',
    div({ attrs: { id: 'toolbar' } }),
    div(
      { attrs: { class: 'toolbar-fixed' } },
      button(
        { events: { click: () => Action.exportSVG } },
        'Export to SVG'
      ),
      button(
        { events: { click: () => Action.exportPNG } },
        'Export to PNG'
      )
    )
  ),
  section(
    { attrs: { class: 'body' } },
    section(
      { attrs: { class: 'sidebar' } },
      ul(
        {},
        iterate(
          {
            getArray: state => state.examples as unknown as Example[] // TODO
          },
          li<[Example, State, number], Action, unknown>(
            {},
            matchBool({
              condition: ([item, state, index]) => item === state.selected,
              true: span(
                {},
                ([item]) => item.split('_').join(' ')
              ),
              false: a(
                  {
                    attrs: { href: ([item]) => `#${item}` },
                    events: { click: ([item]) => Action.changeSample(item) }
                  },
                  ([item]) => item.split('_').join(' ')
                )
            })
          )
        )
      )
    ),
    main(
      {
        attrs: { class: 'main' },
        respond: (query: Query, el) => {
          if (query.kind === 'MainAreaSize') {
            const size = containerSize(el)
            query.callback(new Size(size.width, size.height))
          }
        }
      },
      matchBool({
        condition: state => typeof state.mainAreaSize !== 'undefined',
        true: mapState(
          { map: state => ({ size: state.mainAreaSize!, kind: state.selected }) },
          project<CanvasState, any, any>(
            {
              width: ({size}) => size.width!,
              height: ({size}) => size.height!,
              respond(query: Query, el, ctx, scope) {
                if (!scope) return
                if (query.kind === 'ExportSVG') {
                  const content = scope.context.project.exportSVG({
                    asString: true,
                    embedImages: true
                  }) as string
                  const file = new Blob([content], { type: 'application/svg+xml' })
                  query.callback(file)
                } else if (query.kind === 'ExportPNG') {
                  scope.context.canvas.toBlob(blob => query.callback(blob!), 'image/png')
                }
              }
            },
            matchKind<CanvasState, any, any>({
              circle: circleTemplate,
              path_simplification: pathSimplificationTemplate
            })
          )
        ),
        false: ''
      })
    )
  )
)

const { view } = Tempo.render({ store, template })

store.observable.on(makeMiddleware(view))

const updateSizeQuery = Query.mainAreaSize(size => {
  store.process(Action.setMainAreaSize(size))
})

view.request(updateSizeQuery)

window.addEventListener('resize', () => {
  view.request(updateSizeQuery)
}, false)
