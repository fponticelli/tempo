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

export interface ChangeOptionMaxTime {
  kind: 'ChangeOptionMaxTime'
  value: number
}

export interface ToggleVersion {
  kind: 'ToggleVersion'
  id: string
  selected: boolean
}

export interface ToggleTest {
  kind: 'ToggleTest'
  id: string
  selected: boolean
}

export interface UpdateResult {
  kind: 'UpdateResult'
  runnerId: string
  target: TestResult
}

export interface ExecuteTests {
  kind: 'ExecuteTests'
  versionIds: string[]
  testIds: string[]
}

export interface ToggleAllVersions { kind: 'ToggleAllVersions' }

export interface ToggleAllTests { kind: 'ToggleAllTests' }

export interface ExecuteSelectedTests { kind: 'ExecuteSelectedTests' }

export interface TestsExecuted { kind: 'TestsExecuted' }

export type Action =
  | ChangeOptionMaxTime
  | ToggleVersion
  | ToggleTest
  | ToggleAllVersions
  | ToggleAllTests
  | ExecuteTests
  | ExecuteSelectedTests
  | UpdateResult
  | TestsExecuted

export const Action = {
  changeOptionMaxTime: (value: number): Action => ({ kind: 'ChangeOptionMaxTime', value }),
  toggleVersion: (id: string, selected: boolean): Action => ({ kind: 'ToggleVersion', id, selected }),
  toggleAllVersions: (): Action => ({ kind: 'ToggleAllVersions' }),
  toggleTest: (id: string, selected: boolean): Action => ({ kind: 'ToggleTest', id, selected }),
  toggleAllTests: (): Action => ({ kind: 'ToggleAllTests' }),
  executeTests: (versionIds: string[], testIds: string[]): Action => ({ kind: 'ExecuteTests', versionIds, testIds }),
  executeSelectedTests: (): Action => ({ kind: 'ExecuteSelectedTests' }),
  testsExecuted: (): Action => ({ kind: 'TestsExecuted' }),
  updateResult: (runnerId: string, target: TestResult): Action => ({ kind: 'UpdateResult', runnerId, target })
}
