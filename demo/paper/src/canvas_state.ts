import { Size } from 'paper'

export const examples = ['paint', 'path_simplification', 'symbol'] as const
export type Examples = typeof examples
export type Example = Examples[number]

export interface CanvasState {
  examples: Examples
  selected: Example
  mainAreaSize: Size | undefined
}

export const createState = (): CanvasState => {
  const hash = location.hash.substring(1)
  const selected = (examples.indexOf(hash as Example) >= 0) ? (hash as Example) : examples[0]
  return { examples, selected, mainAreaSize: undefined }
}

export interface SampleState {
  kind: Example
  size: Size
}
