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

import { State, TestInfoWithSelected, makeTestRunId, unpackTestRunId } from './state'
import { Action } from './action'

export const reducer = (state: State, action: Action): State => {
  switch (action.kind) {
    case 'ChangeOptionMaxTime':
      const options = {
        ...state.options,
        maxTime: action.value
      }
      return { ...state, options }
    case 'ToggleTest':
      const tests1 = state.tests.map(test => {
        if (test.id === action.id) {
          return { ...test, selected: action.selected }
        } else {
          return test
        }
      })
      return { ...state, tests: tests1 }
    case 'ToggleAllTests':
      const selected1 = state.tests.filter(test => test.selected).length !== state.tests.length
      const tests2 = state.tests.map(test => ({...test, selected: selected1}))
      return { ...state, tests: tests2 }
    case 'ToggleVersion':
      return {
        ...state,
        versions: state.versions.map(v => {
          if (v.id === action.id)
            return { id: v.id, selected: action.selected }
          else
            return v
        })
      }
    case 'ToggleAllVersions':
      const selected2 = state.versions.filter(v => v.selected).length !== state.versions.length
      const versions2 = state.versions.map(v => ({ ...v, selected: selected2 }), {})
      return { ...state, versions: versions2 }
    case 'ExecuteSelectedTests':
      // middleware will trigger an ExecuteTests action
      return state
    case 'ExecuteTests':
      const ids = action.versionIds.reduce((acc, versionId) => {
        return action.testIds.reduce((acc, testId) => {
          return acc.concat([makeTestRunId(versionId, testId)])
        }, acc)
      }, [] as string[])
      const processing = new Set(state.processing)
      ids.forEach(id => processing.add(id))
      return {
        ...state,
        processing
      }
    case 'TestsExecuted':
      return state
    case 'UpdateResult':
      const { runnerId, target: result } = action
      const id = makeTestRunId(runnerId, result.id)
      const results2 = {
        ...state.results,
        [id]: result
      }
      const stats = calculateMinMax(results2, state.tests)
      const processing2 = new Set(state.processing)
      processing2.delete(id)
      return {
        ...state,
        results: results2,
        processing: processing2,
        stats: {
          ...state.stats,
          ...stats
        }
      }
    default:
      throw `unhandled case ${action}`
  }
}

const calculateMinMaxForTest = (results: Record<string, TestResult>, test: TestInfoWithSelected) => {
  let count = 0
  let min = Infinity
  let max = -Infinity
  for (const testRunId of Object.keys(results)) {
    const { testId } = unpackTestRunId(testRunId)
    if (testId !== test.id) continue
    const result = results[testRunId]
    if (result) {
      if (result.hz < min)
        min = result.hz
      if (result.hz > max)
        max = result.hz
      count++
    }
  }
  if (count > 1)
    return { min, max }
  else
    return undefined
}

const calculateMinMax = (
  results: Record<string, TestResult>,
  tests: TestInfoWithSelected[]
): Record<string, { min: number, max: number }> => {
  return tests.reduce((acc, test) => {
    const stats = calculateMinMaxForTest(results, test)
    if (stats) {
      return { ...acc, [test.id]: stats }
    } else {
      return acc
    }
  }, {})
}
