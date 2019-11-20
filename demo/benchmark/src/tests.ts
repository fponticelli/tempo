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

import { TestInfo, TestDescription } from './state'
import { createRange, createRanges, repeat, createDeep } from './generator'

export const tests: TestDescription[] = [
  {
    id: 'render-list-50',
    name: 'Render List (50)',
    fn: 'renderListElements',
    args: createRange(50)
  }, {
    id: 'render-list-500',
    name: 'Render List (500)',
    fn: 'renderListElements',
    args: createRange(500)
  }, {
    id: 'render-destroy-list-500',
    name: 'Render List & Destroy (500)',
    fn: 'renderListElementsAndDestroy',
    args: createRange(500)
  }, {
    id: 'render-update-list',
    name: 'Render List & Update',
    fn: 'renderListAndUpdate',
    args: createRanges([200, 100, 50, 20, 0, 20, 50, 100, 200])
  }, {
    id: 'render-update-deep',
    name: 'Render Deep & Update',
    fn: 'renderDeepAndUpdate',
    args: repeat(50, createDeep)
  }
]

export const availableTests = (): TestInfo[] => {
  return tests.map(test => ({
    id: test.id,
    name: test.name
  }))
}
