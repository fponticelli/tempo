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

declare namespace Benchmark {
  class Suite {
    add(options: {
      id: string,
      async: boolean,
      fn: Function,
      name: string,
      setup: Function,
      teardown: Function,
      maxTime: number
    }): void;

    on(type: 'cycle', handler: (event: { target: Target }) => void): void
    on(type: 'complete', handler: (event: {}) => void): void

    run({ async: boolean, queued: boolean })
  }
}

interface TestResult {
  options: {
    async: boolean
    defer: boolean
    delay: number
    id: string
    initCount: number
    maxTime: number
    minSamples: number
    minTime: number
    name: string
  }
  async: boolean
  defer: boolean
  delay: number
  id: string
  initCount: number
  maxTime: number
  minSamples: number
  minTime: number
  name: string
  stats: {
    moe: number
    rme: number
    sem: number
    deviation: number
    mean: number
    sample: number[]
    variance: number
  }
  times: {
    cycle: number
    elapsed: number
    period: number
    timeStamp: number
  }
  running: boolean
  count: number
  cycles: number
  hz: number
}
