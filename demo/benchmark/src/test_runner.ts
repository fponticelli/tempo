import { TestResult, TestDescription, TestOptions } from './state'
/// <reference path="./definitions.d.ts" />

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

const makeSuite = (runnerId: string, testDescriptions: TestDescription[], options: TestOptions) =>
  new Promise<Record<string, TestResult>>(async (resolve, reject) => {

    const mod = await loadScript(runnerId)

    const suite = new Benchmark.Suite()
    const results = [] as TestResult[]

    for (const test of testDescriptions) {
      if (!mod[test.fn]) continue

      suite.add({
        id: test.id,
        async: !!test.async,
        fn: function() { mod[test.fn](test.args) },
        name: test.name,
        setup: setup,
        teardown: teardown,
        maxTime: options.maxTime
      })
    }

    suite.on('cycle', function(event: { target: TestResult }) {
      console.log(runnerId + ': ' + String(event.target))
      results.push(event.target)
    })

    suite.on('complete', function() {
      const result = results.reduce((acc, curr) => {
        return {
          ...acc,
          [curr.id]: curr
        }
      }, {})
      resolve(result)
    })

    suite.run({ async: false, queued: true })
  })

export const runTests = async (runnerIds: string[], testDescriptions: TestDescription[], options: TestOptions) => {
  let results = {}
  for (const id of runnerIds) {
    results = {
      ...results,
      [id]: await makeSuite(id, testDescriptions, options)
    }
  }
  return results
}
