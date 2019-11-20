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

import { availableTests } from './tests'
import { Target } from './definitions'
/// <reference path="./definitions.d.ts" />

export interface State {
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

export const createState = (versions: string[]): State => {
  const tests = availableTests().map(test => ({
    ...test,
    selected: true
  }))
  return {
    versions: versions.map(id => ({ id, selected: true })).sort(sortVersion),
    tests,
    results: {},
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
}

export type TestResult = Target

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
