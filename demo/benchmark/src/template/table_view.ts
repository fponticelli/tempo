/*
Copyright 2018 Google LLC
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

import { div, th, table, tr, td, br, a, span } from '@tempo/dom/lib/html'
import { Action } from '../action'
import { TestInfoWithSelected, State, VersionWithSelected, TestResult } from '../state'
import { forEach } from '@tempo/dom/lib/for_each'
import { mapState } from '@tempo/dom/lib/map'
import { when } from '@tempo/dom/lib/when'
import { fragment } from '@tempo/dom/lib/fragment'

const pm = '\xb1'

const resultToCount = (r: TestResult) => {
  return r.hz.toFixed(r.hz < 100 ? 2 : 0) + ' ops/sec ' + pm + r.stats.rme.toFixed(2) + '%'
}

const resultToSamples = (r: TestResult) => {
  const size = r.stats.sample.length
  return size + ' sample' + (size === 1 ? '' : 's')
}

const colHeader = fragment<{ id: string, selected: boolean }, Action>(
  when(
    { condition: s => s.id === 'current' },
    'current',
    br({}),
    s => (s.selected ? '✅' : '⛔️')
  ),
  when(
    { condition: s => s.id !== 'current' },
    mapState(
      {
        map: s => {
          const parts = s.id.split('-')
          const dates = parts[0]
          const year = Number(dates.substring(0, 4))
          const month = Number(dates.substring(4, 6)) - 1
          const day = Number(dates.substring(6, 8))
          const date = new Date(year, month, day)
          const commit = parts[1]
          return { date, commit, selected: s.selected }
        }
      },
      div<{ date: Date, commit: string, selected: boolean }, Action>(
        { attrs: { className: 'date' } },
        s => s.date.toDateString()
      ),
      span(
        { attrs: { className: 'commit' } },
        s => s.commit
      ),
      ' ',
      s => s.selected ? '✅' : '⛔️'
    )
  )
)

export const tableView = div<State, Action>(
  {},
  table(
    {},
    tr(
      { attrs: { className: 'header-row' } },
      th({}),
      mapState(
        { map: state => state.versions },
        forEach(
          {},
          th<VersionWithSelected, Action>(
            {},
            a(
              {
                attrs: { href: '#' },
                events: { click: s => Action.toggleVersion(s.id, !s.selected) }
              },
              colHeader
            )
          )
        )
      )
    ),
    mapState(
      { map: (state: State) => state.tests.map(test => ({ test, state })) },
      forEach(
        { },
        tr(
          {},
          th<{ test: TestInfoWithSelected, state: State }, Action>(
            { attrs: { className: 'header-col' } },
            a(
              {
                attrs: { href: '#' },
                events: { click: s => Action.toggleTest(s.test.id, !s.test.selected) }
              },
              item => (item.test.selected ? '✅' : '⛔️') + ' ' + item.test.name
            )
          ),
          mapState(
            {
              map: (item) => {
                const id = item.test.id
                const results = item.state.results
                console.log(item.state.versions.map(v => results[v.id]?.[id]))
                return item.state.versions.map(v => results[v.id]?.[id])
              }
            },
            forEach(
              {},
              td<TestResult, Action>(
                {},
                fragment(
                  when(
                    { condition: s => s !== undefined },
                    resultToCount,
                    br({}),
                    resultToSamples
                  ),
                  when(
                    { condition: s => s === undefined },
                    'franco'
                  )
                )
              )
            )
          )
        )
      )
    )
  )
)
