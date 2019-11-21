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

import { TestDescription, TestOptions } from './state'

function setup() {
  // document.getElementById('test').innerHTML = ''
}

function teardown() {
  document.getElementById('test')!.innerHTML = ''
}

const loadScript = (runnerId: string): Promise<any> => new Promise((resolve, reject) => {
  const script = document.createElement('script')
  // script.async = false
  // script.defer = false
  script.onload = () => {
    console.log(`loaded tests for ${runnerId}, now executing ...`)
    const anyWin = window as any
    const mod = anyWin.__tests__
    delete anyWin.__tests__
    document.body.removeChild(script)
    resolve(mod)
  }
  script.src = `./${runnerId}/main.js`
  document.body.appendChild(script)
})

const makeSuite = (
  runnerId: string,
  testDescriptions: TestDescription[],
  options: TestOptions,
  dispatch: (runnerId: string, target: Target) => void
) =>
  new Promise<Record<string, Target>>(async resolve => {
    const mod = await loadScript(runnerId)
    const suite = new Benchmark.Suite()

    for (const test of testDescriptions) {
      if (!mod[test.fn]) continue

      suite.add({
        id: test.id,
        async: true,
        fn: function() { mod[test.fn](test.args) },
        name: test.name,
        setup: setup,
        teardown: teardown,
        maxTime: options.maxTime,
        delay: 0.001
      } as any)
    }

    suite.on('cycle', function(event: { target: Target }) {
      console.log(runnerId + ': ' + String(event.target))
      dispatch(runnerId, event.target)
    })

    suite.on('complete', resolve)

    suite.run({ async: true, queued: true })
  })

export const runTests = async (
  runnerIds: string[],
  testDescriptions: TestDescription[],
  options: TestOptions,
  dispatch: (runnerId: string, target: Target) => void
) => {
  for (const id of runnerIds) {
    await makeSuite(id, testDescriptions, options, dispatch)
  }
}
