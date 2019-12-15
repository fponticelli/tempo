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
