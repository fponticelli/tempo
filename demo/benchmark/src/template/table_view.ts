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

import { fragment, table } from 'tempo-dom/lib/html'
import { Action } from '../action'
import { State, makeTestRunId } from '../state'

const resultToOpsPerSec = (r: TestResult) => {
  return r.hz.toFixed(r.hz < 100 ? 2 : 0)
}

const resultToSamples = (r: TestResult) => {
  const size = r.stats.sample.length
  return (
    `error \xb1${r.stats.rme.toFixed(2)}%, ${size} sample` +
    (size === 1 ? '' : 's')
  )
}

const colHeader = fragment<{ id: string; selected: boolean }, Action, unknown>(
  $ =>
    $.when(
      s => s.id === 'current',
      $ =>
        $.text('current')
          .br()
          .text(s => (s.selected ? '✅' : '⛔️'))
    ).when(
      s => s.id !== 'current',
      $ =>
        $.mapState(
          s => {
            const parts = s.id.split('-')
            const dates = parts[0]
            const year = Number(dates.substring(0, 4))
            const month = Number(dates.substring(4, 6)) - 1
            const day = Number(dates.substring(6, 8))
            const date = new Date(year, month, day)
            const commit = parts[1]
            return { date, commit, selected: s.selected }
          },
          $ =>
            $.div($ => $.class('date').text(s => s.date.toDateString()))
              .span($ => $.class('commit').text(s => s.commit))
              .text(' ')
              .text(s => (s.selected ? '✅' : '⛔️'))
        )
    )
)

export const tableView = table<State, Action, unknown>($ =>
  $.tr($ =>
    $.class('header-row')
      .th($ =>
        $.when(
          s => s.processing.size > 0,
          $ =>
            $.span($ =>
              $.class('details')
                .text(s => ` running ${s.processing.size} tests`)
                .br()
            )
        ).button($ =>
          $.onClick(() => Action.executeSelectedTests()).text(
            'execute selected tests'
          )
        )
      )
      .th()
      .mapState(
        s => s.versions,
        $ =>
          $.forEach($ =>
            $.th($ =>
              $.class('version-header').a($ =>
                $.href('#')
                  .onClick(s => Action.toggleVersion(s.id, !s.selected))
                  .append(colHeader)
              )
            )
          )
      )
  )
    .tr($ =>
      $.class('header-row')
        .th($ =>
          $.text('toggle: ')
            .a($ =>
              $.href('#')
                .onClick(() => Action.toggleAllTests())
                .text('tests')
            )
            .text(', ')
            .a($ =>
              $.href('#')
                .onClick(() => Action.toggleAllVersions())
                .text('versions')
            )
        )
        .th()
        .mapState(
          state =>
            state.versions.map(version => ({
              version,
              tests: state.tests.map(t => t.id)
            })),
          $ =>
            $.forEach($ =>
              $.th($ =>
                $.class('hand').a($ =>
                  $.href('#')
                    .onClick(s => Action.executeTests([s.version.id], s.tests))
                    .text('👇')
                )
              )
            )
        )
    )
    .mapState(
      state => state.tests.map(test => ({ test, state })),
      $ =>
        $.forEach($ =>
          $.tr($ =>
            $.th($ =>
              $.class('header-col').a($ =>
                $.href('#')
                  .onClick(s => Action.toggleTest(s.test.id, !s.test.selected))
                  .text(
                    item =>
                      (item.test.selected ? '✅' : '⛔️') + ' ' + item.test.name
                  )
              )
            )
              .th($ =>
                $.class('hand').a($ =>
                  $.href('#')
                    .onClick(s =>
                      Action.executeTests(
                        s.state.versions.map(v => v.id),
                        [s.test.id]
                      )
                    )
                    .text('👉')
                )
              )
              .mapState(
                item => {
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
                },
                $ =>
                  $.forEach($ =>
                    $.td($ =>
                      $.class(s => {
                        const buff = []
                        if (s.selected) buff.push('selected')
                        if (s.processing) buff.push('processing')
                        return buff.join(' ')
                      })
                        .when(
                          s => s.result != null,
                          $ =>
                            $.text(s => resultToOpsPerSec(s.result!))
                              .span($ =>
                                $.class('details')
                                  .title(s => resultToSamples(s.result!))
                                  .text(' ops/sec')
                              )
                              .br()
                              .when(
                                s => !!s.faster && s.faster >= 0.05,
                                $ =>
                                  $.span($ =>
                                    $.class('details').b($ =>
                                      $.text(
                                        s =>
                                          `${(s.faster! * 100).toFixed(
                                            0
                                          )}% faster`
                                      )
                                    )
                                  )
                              )
                              .when(
                                s => !s.processing,
                                $ =>
                                  $.a($ =>
                                    $.href('#')
                                      .onClick(s =>
                                        Action.executeTests(
                                          [s.version],
                                          [s.test]
                                        )
                                      )
                                      .text('▶️')
                                  )
                              )
                        )
                        .when(
                          s => s.result == null && !s.processing,
                          $ =>
                            $.a($ =>
                              $.href('#')
                                .onClick(s =>
                                  Action.executeTests([s.version], [s.test])
                                )
                                .text('▶️')
                            )
                        )
                    )
                  )
              )
          )
        )
    )
)
