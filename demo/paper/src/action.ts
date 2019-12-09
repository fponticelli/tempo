import { Example } from './state'
import { Size } from 'paper'

export type Action = {
  kind: 'ChangeSample'
  sample: Example
} | {
  kind: 'SetMainAreaSize'
  size: Size
}

export const Action = {
  changeSample(sample: Example): Action {
    return { kind: 'ChangeSample', sample }
  },
  setMainAreaSize(size: Size): Action {
    return { kind: 'SetMainAreaSize', size }
  }
}
