import { Example } from './state'
import { Size } from 'paper'

export type Action =
  | { kind: 'ChangeSample', sample: Example }
  | { kind: 'SetMainAreaSize',  size: Size}
  | { kind: 'ExportSVG' }
  | { kind: 'ExportPNG' }

export const Action = {
  changeSample(sample: Example): Action {
    return { kind: 'ChangeSample', sample }
  },
  exportSVG: { kind: 'ExportSVG' } as Action,
  exportPNG: { kind: 'ExportPNG' } as Action,
  setMainAreaSize(size: Size): Action {
    return { kind: 'SetMainAreaSize', size }
  }
}
