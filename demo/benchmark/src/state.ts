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

import { availableTests } from './tests'

export interface State {
  executingTests?: { running: number, total: number }
  versions: VersionWithSelected[]
  tests: TestInfoWithSelected[]
  options: TestOptions
  results: Record<string, Record<string, TestResult>>
}

const sortVersionIds = (a: string, b: string) => {
  if (a === 'current' || a > b) {
    return -1
  } else if (a < b) {
    return 1
  } else {
    return 0
  }
}

const sortVersion = (a: Version, b: Version) => sortVersionIds(a.id, b.id)

const createResults = (versions: Version[], tests: TestInfo[]): Record<string, Record<string, TestResult>> => {
  return versions.reduce((acc, curr) => {
    return {
      ...acc,
      [curr.id]: tests.reduce((acc, curr) => {
        return {
          ...acc,
          [curr.id]: {
            target: undefined,
            processing: false
          }
        }
      }, {})
    }
  }, {})
}

export const createState = (versionIds: string[]): State => {
  const tests = availableTests().map(test => ({
    ...test,
    selected: true
  }))
  const versions = versionIds.map(id => ({ id, selected: true })).sort(sortVersion)
  return {
    versions,
    tests,
    results: createResults(versions, tests),
    options: {
      maxTime: 0.5 // default should be 5
    }
  }
}

export interface Version {
  id: string
}

export interface VersionWithSelected extends Version {
  selected: boolean
}

export interface TestInfo {
  id: string
  name: string
}

export interface TestInfoWithSelected extends TestInfo {
  selected: boolean
  stats?: { min: number, max: number }
}

export interface TestResult {
  target?: Target
  processing: boolean
}

export interface TestDescription {
  id: string
  async?: boolean
  fn: string
  name: string
  args?: any
}

export interface TestOptions {
  maxTime: number
}

export const getSelectedTests = (state: State) => {
  return {
    tests: state.tests.filter(t => t.selected).map(t => t.id),
    versions: state.versions.filter(t => t.selected).map(t => t.id)
  }
}

export const countAllTests = (state: State) => {
  return state.tests.length * state.versions.length
}

export const countSelectedTests = (state: State) => {
  const { tests, versions } = getSelectedTests(state)
  return tests.length * versions.length
}

export const hasSelectedTests = (state: State) => {
  return countSelectedTests(state) > 0
}
