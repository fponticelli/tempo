import { Size } from 'paper'

export type Query =
  | { kind: 'MainAreaSize', callback: (size: Size) => void }
  | { kind: 'ExportSVG', callback: (content: Blob) => void }
  | { kind: 'ExportPNG', callback: (content: Blob) => void }

export const Query = {
  mainAreaSize(callback: (size: Size) => void): Query {
    return { kind: 'MainAreaSize', callback }
  },
  exportPNG(callback: (content: Blob) => void): Query {
    return { kind: 'ExportPNG', callback }
  },
  exportSVG(callback: (content: Blob) => void): Query {
    return { kind: 'ExportSVG', callback }
  }
}
