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

import { State, TestResult } from './state'
import { Action } from './action'
import { TempoView } from '@tempo/dom/lib/tempo'
import { runTests } from './test_runner'
import { tests } from './tests'
import { createApp } from './create_app'

const mergeResults = (a: Record<string, Record<string, TestResult>>, b: Record<string, Record<string, TestResult>>) => {
  return Object.keys(b).reduce((acc, curr) => {
    return {
      ...acc,
      [curr]: {
        ...acc[curr],
        ...b[curr]
      }
    }
  }, a)
}

export const middleware = (app: TempoView<State, Action>) => (state: State, action: Action) => {
  switch (action.kind) {
    case 'ExecuteTests':
      app.destroy()
      setTimeout(() => {
        const { options } = state
        const ids = state.versions.filter(v => v.selected).map(v => v.id)
        const set = new Set(state.tests.filter(test => test.selected).map(test => test.id))
        const testsToRun = tests.filter(test => set.has(test.id))

        runTests(ids, testsToRun, options)
          .then(input => {
            const results = mergeResults(state.results, input)
            const newState = {
              ...state,
              results
            }
            createApp(newState)
          })
      }, 0)
      return
    default:
      // do nothing
  }
}
