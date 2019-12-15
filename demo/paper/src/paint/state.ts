import { Size } from 'paper'

export interface State {
  size: Size
  url: string
  raster: HTMLImageElement | undefined
  message: string
}

export const makeState = (url: string): State => {
  return {
    size: new Size(0, 0),
    url,
    raster: undefined,
    message: ''
  }
}
