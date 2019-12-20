import { Size, Raster } from 'paper'

export interface State {
  size: Size
  url: string
  image: HTMLImageElement | undefined
  raster: Raster | undefined
  message: string
}

export const makeState = (url: string): State => {
  return {
    size: new Size(0, 0),
    url,
    image: undefined,
    raster: undefined,
    message: ''
  }
}
