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
  versions: VersionWithSelected[]
  tests: TestInfo[]
  options: TestOptions
  results: Record<string, TestResult>
  stats: Record<string, { min: number, max: number }>
  processing: Set<string>
}

export const makeTestRunId = (versionId: string, testId: string) => `${versionId}:${testId}`
export const unpackTestRunId = (testRunId: string) => {
  const parts = testRunId.split(':')
  return { versionId: parts[0], testId: parts[1] }
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

export const createState = (versionIds: string[]): State => {
  const tests = availableTests()
  const versions = versionIds.sort(sortVersionIds).map((id, i) => ({ id, selected: i < 2 }))
  return {
    versions,
    tests,
    options: {
      maxTime: 2 // default should be 5
    },
    results: {},
    processing: new Set(),
    stats: {}
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
  selected: boolean
}

export interface TestDescription {
  id: string
  fn: string
  name: string
  args?: any
  selected: boolean
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
