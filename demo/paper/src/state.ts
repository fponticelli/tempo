import { Size } from 'paper'

export const examples = ['circle', 'path_simplification'] as const
export type Examples = typeof examples
export type Example = Examples[number]

export interface State {
  examples: Examples
  selected: Example
  mainAreaSize: Size | undefined
}

export const createState = (): State => {
  const hash = location.hash.substring(1)
  const selected = (examples.indexOf(hash as Example) >= 0) ? (hash as Example) : examples[0]
  return { examples, selected, mainAreaSize: undefined }
}

export interface CanvasState {
  kind: Example
  size: Size
}
