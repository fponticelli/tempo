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

import { State, countAllTests, TestResult, TestInfoWithSelected } from './state'
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
      // TODO also signal that tests are running with some numbers
      const results = action.versionIds.reduce((results, versionId) => {
        return {
          ...results,
          [versionId]: action.testIds.reduce((testResults, testId) => {
            return {
              ...testResults,
              [testId]: {
                target: testResults[testId].target,
                processing: true
              }
            }
          }, results[versionId])
        }
      }, state.results)
      return {
        ...state,
        executingTests: {
          running: action.testIds.length * action.versionIds.length,
          total: countAllTests(state)
        },
        results
      }
      return state
    case 'TestsExecuted':
      return {
        ...state,
        executingTests: undefined
      }
    case 'UpdateResult':
      const { runnerId, target } = action
      const results2 = {
        ...state.results,
        [runnerId]: {
          ...state.results[runnerId],
          [target.id]: {
            target,
            processing: false
          }
        }
      }
      const tests = calculateMinMax(results2, state.tests)
      return {
        ...state,
        results: results2,
        tests,
        executingTests: {
          running: state.executingTests!.running - 1,
          total: state.executingTests!.total
        }
      }
    default:
      throw `unhandled case ${action}`
  }
}

const calculateMinMaxForTest = (results: Record<string, Record<string, TestResult>>, test: TestInfoWithSelected) => {
  let count = 0
  let min = Infinity
  let max = -Infinity
  for (const versionId of Object.keys(results)) {
    const result = results[versionId][test.id]
    if (result.target) {
      if (result.target.hz < min)
        min = result.target.hz
      if (result.target.hz > max)
        max = result.target.hz
      count++
    }
  }
  if (count > 1)
    return { min, max }
  else
    return undefined
}

const calculateMinMax = (results: Record<string, Record<string, TestResult>>, tests: TestInfoWithSelected[]) => {
  return tests.map(test => ({
    ...test,
    stats: calculateMinMaxForTest(results, test)
  }))
}
