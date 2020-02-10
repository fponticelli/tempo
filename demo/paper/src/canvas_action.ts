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

import { Example } from './canvas_state'
import { Size } from 'paper'

export type CanvasAction =
  | { kind: 'ChangeSample', sample: Example }
  | { kind: 'SetMainAreaSize',  size: Size}
  | { kind: 'ExportSVG' }
  | { kind: 'ExportPNG' }

export const CanvasAction = {
  changeSample(sample: Example): CanvasAction {
    return { kind: 'ChangeSample', sample }
  },
  exportSVG: { kind: 'ExportSVG' } as CanvasAction,
  exportPNG: { kind: 'ExportPNG' } as CanvasAction,
  setMainAreaSize(size: Size): CanvasAction {
    return { kind: 'SetMainAreaSize', size }
  }
}
