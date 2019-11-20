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
      const tests2 = state.tests.map(test => ({...test, selected: selected1}))
      return { ...state, tests: tests2 }
    case 'ToggleVersion':
      return {
        ...state,
        versions: state.versions.map(v => {
          if (v.id === action.id)
            return { id: v.id, selected: action.selected }
          else
            return v
        })
      }
    case 'ToggleAllVersions':
      const selected2 = state.versions.filter(v => v.selected).length !== state.versions.length
      const versions2 = state.versions.map(v => ({ ...v, selected: selected2 }), {})
      return { ...state, versions: versions2 }
    case 'ExecuteTests':
      // no state changes
      return state
    default:
      throw `unhandled case ${action}`
  }
}
