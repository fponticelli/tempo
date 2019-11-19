import { State } from './state'
import { Action } from './action'
import { TempoView } from '@tempo/dom/lib/tempo'
import { runTests } from './test_runner'
import { tests } from './tests'
import { createApp } from './create_app'

const mergeResults = (a: Record<string, unknown>, b: Record<string, unknown>) => {
  return {
    ...a,
    ...b
  }
}

export const middleware = (app: TempoView<State, Action>) => (state: State, action: Action) => {
  switch (action.kind) {
    case 'ExecuteTests':
      app.destroy()
      setTimeout(() => {
        const { options } = state
        const ids = Object.keys(state.versions).filter(key => state.versions[key])
        const set = new Set(state.tests.filter(test => test.selected).map(test => test.id))
        const testsToRun = tests.filter(test => set.has(test.id))

        runTests(ids, testsToRun, options)
          .then(input => {
            const results = mergeResults(state.results, input)
            const newState = {
              ...state,
              results
            }
            createApp(newState)
          })
      }, 0)
      return
    default:
      // do nothing
  }
}
