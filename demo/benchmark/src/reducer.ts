import { State } from './state'
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
      console.log(selected1)
      const tests2 = state.tests.map(test => ({...test, selected: selected1}))
      return { ...state, tests: tests2 }
    case 'ToggleVersion':
      const versions1 = {
        ...state.versions,
        [action.id]: action.selected
      }
      return { ...state, versions: versions1 }
    case 'ToggleAllVersions':
      const keys = Object.keys(state.versions)
      const selected2 = keys.filter(k => state.versions[k]).length !== keys.length
      const versions2 = keys.reduce((acc, key) => ({ ...acc, [key]: selected2 }), {})
      return { ...state, versions: versions2 }
    case 'ExecuteTests':
      // no state changes
      return state
    default:
      throw `unhandled case ${action}`
  }
}
