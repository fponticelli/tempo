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

import { div, th, table, tr, td, br, a, span, button, b, s } from '@tempo/dom/lib/html'
import { Action } from '../action'
import { TestInfo, State, VersionWithSelected, makeTestRunId } from '../state'
import { forEach } from '@tempo/dom/lib/for_each'
import { mapState } from '@tempo/dom/lib/map'
import { when } from '@tempo/dom/lib/when'
import { fragment } from '@tempo/dom/lib/fragment'

const resultToOpsPerSec = (r: TestResult) => {
  return r.hz.toFixed(r.hz < 100 ? 2 : 0)
}

const resultToSamples = (r: TestResult) => {
  const size = r.stats.sample.length
  return `error \xb1${r.stats.rme.toFixed(2)}%, ${size} sample` + (size === 1 ? '' : 's')
}

const colHeader = fragment<{ id: string; selected: boolean }, Action>(
  when({ condition: s => s.id === 'current' }, 'current', br({}), s => (s.selected ? '✅' : '⛔️')),
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
      div<{ date: Date; commit: string; selected: boolean }, Action>({ attrs: { className: 'date' } }, s =>
        s.date.toDateString()
      ),
      span({ attrs: { className: 'commit' } }, s => s.commit),
      ' ',
      s => (s.selected ? '✅' : '⛔️')
    )
  )
)

export const tableView = table<State, Action>(
  {},
  tr(
    { attrs: { className: 'header-row' } },
    th(
      {},
      when(
        { condition: s => s.processing.size > 0 },
        span({ attrs: { className: 'details' } }, s => ` running ${s.processing.size} tests`),
        br({})
      ),
      button({ events: { click: () => Action.executeSelectedTests() } }, 'execute selected tests')
    ),
    th({}),
    mapState(
      { map: state => state.versions },
      forEach(
        {},
        th<VersionWithSelected, Action>(
          { attrs: { className: 'version-header' } },
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
  tr(
    { attrs: { className: 'header-row' } },
    th(
      {},
      'toggle: ',
      a({ attrs: { href: '#' }, events: { click: () => Action.toggleAllTests() } }, 'tests'),
      ', ',
      a({ attrs: { href: '#' }, events: { click: () => Action.toggleAllVersions() } }, 'versions')
    ),
    th({}),
    mapState(
      { map: state => state.versions.map(version => ({ version, tests: state.tests.map(t => t.id) })) },
      forEach(
        {},
        th<{ version: VersionWithSelected; tests: string[] }, Action>(
          { attrs: { className: 'hand' } },
          a(
            {
              attrs: { href: '#' },
              events: { click: s => Action.executeTests([s.version.id], s.tests) }
            },
            '👇'
          )
        )
      )
    )
  ),
  mapState(
    { map: (state: State) => state.tests.map(test => ({ test, state })) },
    forEach(
      {},
      tr(
        {},
        th<{ test: TestInfo; state: State }, Action>(
          { attrs: { className: 'header-col' } },
          a(
            {
              attrs: { href: '#' },
              events: { click: s => Action.toggleTest(s.test.id, !s.test.selected) }
            },
            item => (item.test.selected ? '✅' : '⛔️') + ' ' + item.test.name
          )
        ),
        th(
          { attrs: { className: 'hand' } },
          a(
            {
              attrs: { href: '#' },
              events: {
                click: s =>
                  Action.executeTests(
                    s.state.versions.map(v => v.id),
                    [s.test.id]
                  )
              }
            },
            '👉'
          )
        ),
        mapState(
          {
            map: item => {
              const testId = item.test.id
              const results = item.state.results
              const stats = item.state.stats[testId]
              return item.state.versions.map(v => {
                const id = makeTestRunId(v.id, testId)
                const result = results[id] || null
                return {
                  result,
                  selected: v.selected && item.test.selected,
                  test: item.test.id,
                  version: v.id,
                  stats,
                  processing: item.state.processing.has(id),
                  faster: result && stats && result.hz / stats.min - 1
                }
              })
            }
          },
          forEach(
            {},
            td<
              {
                result: TestResult
                selected: boolean
                test: string
                version: string
                processing: boolean
                stats?: { min: number; max: number }
                faster?: number
              },
              Action
            >(
              {
                attrs: {
                  className: s => {
                    const buff = []
                    if (s.selected) buff.push('selected')
                    if (s.processing) buff.push('processing')
                    return buff.join(' ')
                  }
                }
              },
              when(
                { condition: s => s.result != null },
                s => resultToOpsPerSec(s.result!),
                span({ attrs: { className: 'details', title: s => resultToSamples(s.result!) } }, ' ops/sec'),
                br({}),
                when(
                  { condition: s => !!s.faster && s.faster >= 0.05 },
                  span(
                    { attrs: { className: 'details' } },
                    b({}, s => `${(s.faster! * 100).toFixed(0)}% faster`)
                  )
                ),
                when(
                  { condition: s => !s.processing },
                  ' ',
                  a(
                    {
                      attrs: { href: '#' },
                      events: { click: s => Action.executeTests([s.version], [s.test]) }
                    },
                    '▶️'
                  )
                )
              ),
              when(
                { condition: s => s.result == null && !s.processing },
                a(
                  {
                    attrs: { href: '#' },
                    events: { click: s => Action.executeTests([s.version], [s.test]) }
                  },
                  '▶️'
                )
              )
            )
          )
        )
      )
    )
  )
)
