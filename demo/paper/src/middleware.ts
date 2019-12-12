import { State } from './state'
import { Action } from './action'
import { View } from 'tempo-core'
import { Query } from './query'

const makeSave = (name: string, type: string) => (file: Blob) => {
  var a = document.createElement('a')
  a.href = URL.createObjectURL(file)
  a.download = name
  a.click()
}

const saveSVG = makeSave('export.svg', 'application/svg+xml')
const savePNG = makeSave('export.png', 'image/png')

export const makeMiddleware = (view: View<State, Query>) => (state: State, action: Action) => {
  switch (action.kind) {
    case 'ExportPNG':
      return view.request(Query.exportPNG(savePNG))
    case 'ExportSVG':
      return view.request(Query.exportSVG(saveSVG))
    default:
  }
}
