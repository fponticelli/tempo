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

import { CanvasState } from './canvas_state'
import { CanvasAction } from './canvas_action'
import { View } from 'tempo-core/lib/view'
import { Query } from './query'

const makeSave = (name: string, type: string) => (file: Blob) => {
  var a = document.createElement('a')
  a.href = URL.createObjectURL(file)
  a.download = name
  a.click()
}

const saveSVG = makeSave('export.svg', 'application/svg+xml')
const savePNG = makeSave('export.png', 'image/png')

export const makeMiddleware = (view: View<CanvasState, Query>) => (
  state: CanvasState,
  action: CanvasAction
) => {
  switch (action.kind) {
    case 'ExportPNG':
      return view.request(Query.exportPNG(savePNG))
    case 'ExportSVG':
      return view.request(Query.exportSVG(saveSVG))
    default:
  }
}
